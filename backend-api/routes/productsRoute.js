const express = require ("express" );
const productRoute = express.Router();
const  
   {
    fetchAllProducts,
    addNewProduct, fetchOneProduct, fetchNewProducts, fetchProductDetails
   }= require( "../controllers/productsController");

/* Fetch ALl Products */
productRoute.get("/products" , fetchAllProducts);//old
productRoute.get("/newproducts" , fetchNewProducts);//new product database routes
productRoute.get("/productdetails/:id", fetchProductDetails);//new product database routes

/* Add New Product */
productRoute.post("/admin/product/add" , addNewProduct);//new product database routes
productRoute.get("/products/:id" , fetchOneProduct);//old



module.exports = productRoute;
