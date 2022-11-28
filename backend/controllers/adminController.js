const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const { json } = require("express");


const registerAdmin = asyncHandler(async (req, res) => {
  const {email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }

  const userExists = await Admin.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  // Hash password
  const slt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, slt);

  //  create user
  const admin = await Admin.create({
    email,
    password: hashPass,
  });

  if (admin) {
    res.status(200).json({
      _id: admin.id,
      email: admin.email,
      token: generateToken(Admin._id),
    });
  } else {
    res.status(400).json({
      status: false,
    });
  }
});
// Authentificate a user
// POST /api/users/login
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check email
  const admin = await Admin.findOne({ email });
  if (admin && (await bcrypt.compare(password, admin.password))) {
    res
      .json({
        _id: admin.id,
        email: admin.email,
        token: generateToken(admin._id),
        status: true,
    
      })
      .status(200);
  } else {
    res.status(400).json({
      status: false,
    });
  }
});

const getDataAdmin = asyncHandler(async (req, res) => {
    const {_id, email } = await Admin.findById(req.admin.id)
    res.status(200).json({
       id: _id,
       email,
})
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getDataAdmin
};



// next() pour passer d'une fonction à une autre
