const { Storage } = require("@google-cloud/storage");

const storage = new Storage(); // auto uses env credentials
const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

// ✅ Reusable upload function
async function uploadBufferToGCS(file, folder = "uploads") {
  if (!file) {
    throw new Error("No file provided");
  }

  const ext = file.originalname?.split(".").pop() || "bin";

  const fileName = `${folder}/${Date.now()}-${Math.round(
    Math.random() * 1e9
  )}.${ext}`;

  const blob = bucket.file(fileName);

  await blob.save(file.buffer, {
    metadata: {
      contentType: file.mimetype,
    },
    resumable: false,
  });

  return {
    id: fileName,
    fileName,
    gsUrl: `gs://${process.env.GCS_BUCKET_NAME}/${fileName}`,
    publicUrl: process.env.GCS_PUBLIC_BASE_URL
      ? `${process.env.GCS_PUBLIC_BASE_URL}/${fileName}`
      : null,
  };
}

module.exports = {
  uploadBufferToGCS,
};