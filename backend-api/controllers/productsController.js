/* product data */
const newProduct = require("../models/newproductsModel.js"); //Sir json data model
const Product = require("../models/productsModel.js");
// const mongoose = require('mongoose');
const fetchAllProducts = async (req, res) => {
    try {
        const products = await Product.find();   /// SELECT * FROM Products
        if (products.length === 0) {
            return res.
                json({
                    message: "No products found"
                })
        }
        else {
            res.json({
                success: true,
                products: products
            });

        }
    } catch (err) {
        res.json({
            success: false,
            error: "Something went wrong..."
        })
    }
}

// const fetchOneProduct = async (req, res) => {
//     try {
//         const productId = req.params.id;
//         const foundProduct = await Product.findById(productId);

//         if (!foundProduct) {
//             res.status(404).json({
//                 ok: false,
//                 message: "Product with IDnot found",
//             });
//         } else {
//             res.status(200).json({

//                 ok: true,
//                 message: "Product  has been found",
//                 product: foundProduct 

//             });
//         }
//     } catch (err) {
//         console.log("Connection Failed: " + err.message);
//         res.status(500).json({
//             ok: false,
//             message: "Internal server error",
//         });
//     }
// };
// Import mongoose if not already imported

const fetchOneProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const foundProduct = await Product.findById(productId);
        if (!foundProduct) {
            return res.status(404).json({
                ok: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            ok: true,
            message: "Product has been found",
            product: foundProduct
        });
    } catch (err) {
        console.log("Connection Failed: " + err.message);
        res.status(500).json({
            ok: false,
            message: "Internal server error",
        });
    }
};
const fetchNewProducts = async (req, res) => {

    try {

        const products = await newProduct.find();

        res.json({
            products,
            pagination: {}
        });

    } catch (error) {

        res.json({
            error: "Something went wrong"
        })

    }
}

//new product database 
const addNewProduct = async (req, res) => {
    console.log(req.body)

    try {
        let newProduct = await new Product(req.body).save();

        res.json({
            data: newProduct
        })
    } catch (err) {
        console.log(err.message);
    }

}

const fetchProductDetails = async (req, res) => {
    try {
        const newProductId = req.params.id;
        const foundnewProduct = await newProduct.findById(newProductId);
        if (!foundnewProduct) {
            return res.json({
                ok: false, message: 'No product found'
            })
        }
        res.send(foundnewProduct)
        // res.json({
        //     ok: true, message: 'Product found',
        //     product: foundnewProduct
        // })
    } catch (error) {
        console.log("Connection Failed: " + err.message);
        res.json({
            ok: false, message: 'something went wrong'
        })
    }
}
module.exports =
{
    fetchAllProducts,
    addNewProduct,
    fetchOneProduct, fetchNewProducts, fetchProductDetails
};


