const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    owner: String
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);