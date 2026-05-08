const Product = require("../models/Product");
const Brand = require("../models/Brand");
const Category = require("../models/Category");
const ApiError = require("../errors/api-error");

const addProduct = async (req, res, next) => {
  try {
    const imageURLs = [req.body.image, ...(req.body.relatedImages || [])];

    const normalizedBody = {
      ...req.body,
      relatedImages: imageURLs,
      categories:
        Array.isArray(req.body.categories) && req.body.categories.length
          ? req.body.categories
          : req.body.category
          ? [req.body.category]
          : [],
      parent:
        req.body.parent ||
        (Array.isArray(req.body.categories) && req.body.categories[0]?.name) ||
        req.body.category?.name ||
        "",
    };

    const newProduct = new Product(normalizedBody);
    await newProduct.save();

    const { _id: productId, brand, categories } = newProduct;

    if (brand?.id) {
      await Brand.updateOne(
        { _id: brand.id },
        { $addToSet: { products: productId } }
      );
    }

    if (Array.isArray(categories) && categories.length) {
      const categoryIds = categories.map((cat) => cat.id);
      await Category.updateMany(
        { _id: { $in: categoryIds } },
        { $addToSet: { products: productId } }
      );
    }

    res.send({
      message: "Product added successfully",
    });
  } catch (err) {
    next(err);
  }
};

const addAllProducts = async (req, res) => {
  try {
    await Product.deleteMany();
    const result = await Product.insertMany(req.body);
    res.send({
      message: "Products added successfully",
      result,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingProducts = async (req, res, next) => {
  try {
    const result = await Product.find({ status: "active" });
    res.json({
      success: true,
      products: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const result = await Product.find({});
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getDiscountProduct = async (req, res, next) => {
  try {
    const discountProducts = await Product.find({ discount: { $gt: 0 } });
    res.json({
      success: true,
      products: discountProducts,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

const getRelatedProducts = async (req, res, next) => {
  const { tags } = req.query;
  const queryTags = tags?.split(",");

  try {
    const product = await Product.find({ tags: { $in: queryTags } }).limit(4);
    res.status(200).json({
      status: true,
      product,
    });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const isExist = await Product.findById(req.params.id);

    if (!isExist) {
      throw new ApiError(404, "Product not found !");
    }

    if (isExist?.brand?.id) {
      await Brand.updateOne(
        { _id: isExist.brand.id },
        { $pull: { products: isExist._id } }
      );
    }

    if (Array.isArray(isExist.categories) && isExist.categories.length) {
      const categoryIds = isExist.categories.map((cat) => cat.id);
      await Category.updateMany(
        { _id: { $in: categoryIds } },
        { $pull: { products: isExist._id } }
      );
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product delete successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const isExist = await Product.findOne({ _id: req.params.id });

    if (!isExist) {
      throw new ApiError(404, "Product not found !");
    }

    const normalizedBody = {
      ...req.body,
      categories:
        Array.isArray(req.body.categories) && req.body.categories.length
          ? req.body.categories
          : [],
      parent:
        req.body.parent ||
        (Array.isArray(req.body.categories) && req.body.categories[0]?.name) ||
        isExist.parent ||
        "",
    };

    const oldCategoryIds = Array.isArray(isExist.categories)
      ? isExist.categories.map((cat) => String(cat.id))
      : [];

    const newCategoryIds = Array.isArray(normalizedBody.categories)
      ? normalizedBody.categories.map((cat) => String(cat.id))
      : [];

    const oldBrandId = isExist?.brand?.id ? String(isExist.brand.id) : "";
    const newBrandId = normalizedBody?.brand?.id
      ? String(normalizedBody.brand.id)
      : "";

    const removedCategoryIds = oldCategoryIds.filter(
      (id) => !newCategoryIds.includes(id)
    );

    const addedCategoryIds = newCategoryIds.filter(
      (id) => !oldCategoryIds.includes(id)
    );

    const result = await Product.findOneAndUpdate(
      { _id: req.params.id },
      normalizedBody,
      { new: true }
    );

    if (removedCategoryIds.length) {
      await Category.updateMany(
        { _id: { $in: removedCategoryIds } },
        { $pull: { products: isExist._id } }
      );
    }

    if (addedCategoryIds.length) {
      await Category.updateMany(
        { _id: { $in: addedCategoryIds } },
        { $addToSet: { products: isExist._id } }
      );
    }

    if (oldBrandId && newBrandId && oldBrandId !== newBrandId) {
      await Brand.updateOne(
        { _id: oldBrandId },
        { $pull: { products: isExist._id } }
      );

      await Brand.updateOne(
        { _id: newBrandId },
        { $addToSet: { products: isExist._id } }
      );
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  addAllProducts,
  getShowingProducts,
  getDiscountProduct,
  getSingleProduct,
  getRelatedProducts,
  getAllProducts,
  deleteProduct,
  updateProduct,
};