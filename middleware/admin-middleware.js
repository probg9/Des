const jwt = require('jsonwebtoken');

const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Assuming Bearer token

  if (!token) {
    return res.status(403).json({ success: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Failed to authenticate token" });
    }

    // Check if the user is an admin
    if (!decoded.isAdmin) {
      return res.status(403).json({ success: false, message: "Access denied: Admins only" });
    }

    // If the user is an admin, proceed to the next middleware
    next();
  });
};

module.exports = adminMiddleware;
