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
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

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
    res.status(401);
     new Error("Not authorized, no token");
  }
});


const isAdmin =  (req, res, next) => {
  try{
    const {isAdmin} = req.user;
    console.log(req.user)
    if(!isAdmin) return res.json({message:
      "You are not authorized to access this route"})   
          next()}
catch(ex) {
    res.json(ex.message)
}

next();
}

module.exports = { protect, isAdmin };
