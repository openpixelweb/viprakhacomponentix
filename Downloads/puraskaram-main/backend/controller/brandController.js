const Brand = require('../models/Brand');
const brandService = require('../services/brand.service');

module.exports.addBrand = async (req,res,next) => {
  try {

    //console.log("Brand Request:", req.body);

    const newBrand = new Brand(req.body);
    await newBrand.save();

    res.send({
      message:'Brand added successfully',
    })

  } catch (error) {
    next(error)
  }
}

// add all Brand
exports.addAllBrand = async (req,res,next) => {
  try {
    const result = await brandService.addAllBrandService(req.body);
    res.json({
      message:'Brands added successfully',
      result,
    })
  } catch (error) {
    next(error)
  }
}

// get active Brand
exports.getAllBrands = async (req,res,next) => {
  try {
    const result = await Brand.find({},{name:1,email:1,logo:1,website:1,location:1});
    res.status(200).json({
      success:true,
      result,
    })
  } catch (error) {
    next(error)
  }
}

// get active Brand
exports.getActiveBrands = async (req,res,next) => {
  try {
    const result = await brandService.getBrandsService();
    res.status(200).json({
      success:true,
      result,
    })
  } catch (error) {
    next(error)
  }
}

// delete Brand
exports.deleteBrand = async (req,res,next) => {
  try {
    await brandService.deleteBrandsService(req.params.id);
    res.status(200).json({
      success:true,
      message:'Brand delete successfully',
    })
  } catch (error) {
    next(error)
  }
}

// update Brand
exports.updateBrand = async (req,res,next) => {
  try {
    const result = await brandService.updateBrandService(req.params.id,req.body);
    res.status(200).json({
      status:true,
      message:'Brand update successfully',
      data:result,
    })
  } catch (error) {
    next(error)
  }
}

// get single Brand
exports.getSingleBrand = async (req,res,next) => {
  try {
    const result = await brandService.getSingleBrandService(req.params.id);
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}