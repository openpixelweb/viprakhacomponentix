module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (!userRole) {
      return res.status(403).json({
        status: "fail",
        error: "Forbidden",
      });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        status: "fail",
        error: "You are not allowed to perform this action",
      });
    }

    next();
  };
};
