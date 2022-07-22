const dotenv = require("dotenv");
dotenv.config({
  path: "./cloudinary.env",
});
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "phirlo",
  api_key: "518976526188837",
  api_secret: "oufJ7BCd7opVlmCJLHEEFRLcf80",
});

module.exports = { cloudinary };
