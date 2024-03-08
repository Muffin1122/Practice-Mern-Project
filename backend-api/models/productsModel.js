const mongoose = require( "mongoose");

const productSchema = new mongoose.Schema({

      title: {
            type: String,
            required: [true, "Please Enter Product Title"],
            maxlength: [100, "Product Title must be less than 100 characters"],
            trim: true,

      },
      brand: {

        type: String,
        required: [true, "Please Enter Product Title"],
        maxlength: [50, "Product Title must be less than 50 characters"],
        trim: true,

      },
            
      description: {
        type: String,
        required: [true, "Please Enter Product Title"],
        maxlength: [500, "Product Title must be less than 500 characters"],
        trim: true,
      },
      category: { 
        type: String,
        required: [true, "Please Enter Product Title"],
        maxlength: [50, "Product Title must be less than 500 characters"],
        trim: true,
      },
      price: {
             type: Number,
             required: [true, "Please Enter Product Price"],
             trim: true,
      } ,
      stock: {
        type: Number,
        required: [true, "Please Enter Product Stock"],
        trim: true,
       },
       
       image: [
             
       ],

       numOfReviews: 
       {
        type: Number,
        trim: true,
        default: 0
       },

       rating: {
        type: Number,
        trim: true,
        default: 0
       },

       reviews: {
         name: {
            type: String,
            trim: true,
            default: ""
         },
         rating: 
         {
            type: Number,
            trim: true,
            default: 0
         },
         comment: {
            type: String,
            trim: true,
            default: ""
         }
        
        }

}, { timestamps: true });



const Product = mongoose.model("product", productSchema);

module.exports = Product;

