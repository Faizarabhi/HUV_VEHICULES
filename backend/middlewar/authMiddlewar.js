const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, "hhh");

      // get admin from the token
      req.admin = await Admin.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401).send("Not authorized, no token");
  }
});

// check if the user is an admin
const getDataAdmin = asyncHandler(async (req, res) => {
  const { _id, email } = await Admin.findById(req.admin.id);
  res.status(200).json({
    id: _id,
    email,
  });
});

// check if the user is an admin
const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.admin && req.admin.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
});


module.exports = { protect, isAdmin, getDataAdmin };








