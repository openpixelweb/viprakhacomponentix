const { body, param } = require("express-validator");

exports.createProductValidator = [
  body("sku").trim().notEmpty().withMessage("SKU is required"),
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("parent").trim().notEmpty().withMessage("Parent category is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("originalPrice").isFloat({ min: 0 }).withMessage("Original price must be 0 or more"),
  body("price").isFloat({ gt: 0 }).withMessage("Price must be greater than 0"),
  body("quantity").isInt({ min: 0 }).withMessage("Quantity must be 0 or more"),
  body("unit").trim().notEmpty().withMessage("Unit is required"),
  body("brand.id").isMongoId().withMessage("Valid brand id is required"),
  body("brand.name").trim().notEmpty().withMessage("Brand name is required"),
  body("categories").optional().isArray({ min: 1 }).withMessage("At least one category is required"),
  body("categories.*.id").optional().isMongoId().withMessage("Valid category id is required"),
  body("categories.*.name").optional().trim().notEmpty().withMessage("Category name is required"),
  body("category.id").optional().isMongoId().withMessage("Valid category id is required"),
  body("category.name").optional().trim().notEmpty().withMessage("Category name is required"),
];

exports.updateProductValidator = [
  param("id").isMongoId().withMessage("Invalid product id"),
  body("title").optional().trim().notEmpty().withMessage("Title cannot be empty"),
  body("price").optional().isFloat({ gt: 0 }).withMessage("Price must be greater than 0"),
  body("originalPrice").optional().isFloat({ min: 0 }).withMessage("Original price must be 0 or more"),
  body("quantity").optional().isInt({ min: 0 }).withMessage("Quantity must be 0 or more"),
  body("categories").optional().isArray({ min: 1 }).withMessage("At least one category is required"),
  body("categories.*.id").optional().isMongoId().withMessage("Valid category id is required"),
  body("categories.*.name").optional().trim().notEmpty().withMessage("Category name is required"),
  body("category.id").optional().isMongoId().withMessage("Valid category id is required"),
  body("category.name").optional().trim().notEmpty().withMessage("Category name is required"),
];