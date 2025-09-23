const { CustomApiError } = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    console.log(token);
    if (!token) {
      throw new CustomApiError("No token passed", 401);
    }
    const checkToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!checkToken) {
      throw new CustomApiError("Failed to verify", 403);
    }
    console.log(checkToken);
    req.user = await User.findById(checkToken.id);
    console.log(req.user);
    if (!req.user) {
      throw new CustomApiError("User not found", 404);
    }
    next();
  } catch (e) {
    console.log(e.message);
    return res
      .status(403)
      .json({ message: "Invalid token.", error: e.message });
  }
};

module.exports = { verifyToken };
