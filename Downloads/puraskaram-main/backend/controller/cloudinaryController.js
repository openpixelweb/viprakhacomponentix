const { deleteImage, uploadImageBuffer } = require('../services/gcs.service');

const saveImageLocal = async (req, res) => {
  try {
    const data = await uploadImageBuffer(req.file, 'product');

    res.status(200).json({
      success: true,
      message: 'image uploaded successfully',
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: err.message || 'Image upload failed',
    });
  }
};

const addMultipleImageLocal = async (req, res) => {
  try {
    const files = req.files || [];
    const images = await Promise.all(files.map((file) => uploadImageBuffer(file, 'product')));

    res.status(200).json({
      success: true,
      message: 'images uploaded successfully',
      data: images,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: err.message || 'Image upload failed',
    });
  }
};

const deleteUploadedImage = async (req, res) => {
  try {
    const objectPath = decodeURIComponent(req.query.id || '');
    const data = await deleteImage(objectPath);

    res.status(200).json({
      success: true,
      message: 'image deleted successfully',
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: err.message || 'Image delete failed',
    });
  }
};

exports.cloudinaryController = {
  saveImageLocal,
  addMultipleImageLocal,
  deleteUploadedImage,
};
