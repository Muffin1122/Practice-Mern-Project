const mongoose = require( "mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    descriptoion: {
        type: String,
        required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: {
      type: Array,
      required: true,
      default: [],
    },
    stock: {
        type: Number,
        required: true,
    },
    productIsNew: {
        type: Boolean,
        required: true,
    },
    stripeId: {
        type: String
    }
  },
  { timestamps: true }
);


const newProduct = mongoose.model("newProduct", productSchema);

module.exports = newProduct;