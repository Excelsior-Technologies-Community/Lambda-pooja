module.exports = async (req, res, next) => {
  try {
    const adminUsername = req.headers["x-admin-username"];
    
    if (adminUsername === "admin") {
      return next();
    }
    
    return res.status(403).json({
      success: false,
      message: "Access Denied: Admin authorization required.",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Authentication Error",
    });
  }
};
