const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is requiered"],
    },
    price: {
      type: Number,
      required: [true, "Price is requiered"],
    },
    description: {
      type: String,
      required: [true, "Description is requiered"],
    },
  },
  { timestamps: true }
);
module.exports.Product = mongoose.model("Product", ProductSchema);
