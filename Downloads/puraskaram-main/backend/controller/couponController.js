const notAvailable = async (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Coupon feature has been removed",
  });
};

module.exports = {
  addCoupon: notAvailable,
  addAllCoupon: notAvailable,
  getAllCoupons: async (req, res) => {
    return res.status(200).json([]);
  },
  getCouponById: notAvailable,
  updateCoupon: notAvailable,
  deleteCoupon: notAvailable,
};