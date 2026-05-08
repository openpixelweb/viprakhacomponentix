const path = require("path");
const crypto = require("crypto");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage();
const bucketName = process.env.GCS_BUCKET_NAME;
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAGIC_BYTES = {
  "image/jpeg": [Buffer.from([0xff, 0xd8, 0xff])],
  "image/png": [Buffer.from([0x89, 0x50, 0x4e, 0x47])],
  "image/webp": [Buffer.from("RIFF"), Buffer.from("WEBP")],
  "image/gif": [Buffer.from("GIF87a"), Buffer.from("GIF89a")],
};

const getBucket = () => {
  if (!bucketName) throw new Error("GCS_BUCKET_NAME is not configured");
  return storage.bucket(bucketName);
};

const validateImageFile = (file) => {
  if (!file || !file.buffer) throw new Error("No file buffer provided");
  if (!ALLOWED_MIME_TYPES.has(file.mimetype)) throw new Error("Unsupported image type");
  if (file.size > MAX_IMAGE_SIZE) throw new Error("Image exceeds size limit");

  const signatures = MAGIC_BYTES[file.mimetype] || [];
  if (file.mimetype === "image/webp") {
    const isRiff = file.buffer.subarray(0, 4).equals(signatures[0]);
    const isWebp = file.buffer.subarray(8, 12).equals(signatures[1]);
    if (!isRiff || !isWebp) throw new Error("Invalid WEBP file signature");
    return;
  }

  const valid = signatures.some((sig) => file.buffer.subarray(0, sig.length).equals(sig));
  if (!valid) throw new Error("Invalid file signature");
};

const sanitizeExtension = (fileName = "file") => {
  const ext = path.extname(fileName).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext) ? ext : "";
};

const getPublicUrl = (objectPath) => {
  const base = process.env.GCS_PUBLIC_BASE_URL;
  if (base) return `${base.replace(/\/$/, "")}/${objectPath}`;
  return `https://storage.googleapis.com/${bucketName}/${objectPath}`;
};

const uploadImageBuffer = async (file, folder = "product") => {
  validateImageFile(file);
  const bucket = getBucket();
  const ext = sanitizeExtension(file.originalname);
  const objectPath = `${folder}/${Date.now()}-${crypto.randomUUID()}${ext}`;
  const blob = bucket.file(objectPath);

  await blob.save(file.buffer, {
    resumable: false,
    validation: "crc32c",
    metadata: {
      contentType: file.mimetype,
      cacheControl: "public, max-age=31536000",
    },
  });

  return { url: getPublicUrl(objectPath), id: objectPath };
};

const deleteImage = async (objectPath) => {
  if (!objectPath) throw new Error("Object path is required");
  const bucket = getBucket();
  await bucket.file(objectPath).delete({ ignoreNotFound: true });
  return { result: "ok", id: objectPath };
};

module.exports = { uploadImageBuffer, deleteImage, getPublicUrl };
