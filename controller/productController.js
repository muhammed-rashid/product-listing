const Product = require('../model/product')
const slugify = require('slugify')
module.exports = productController = {
    getProduct : (req,res) =>{
      Product.find().exec((error,products)=>{
      

        return res.status(200).json({
          products
         })
     })
 
    },

    addProduct : (req,res) =>{
        const { productName,category,discription } = req.body;

        if (!productName || !category || !discription ) {
          return res.status(500).json({ error: "All Fields are required" });
        }
        //save to the database as a new category
        const productObj = {
            productName: productName,
          slug: slugify(productName),
          category:category,
          discription:discription
        };
    
       
    
        let new_product = new Product(productObj);
        new_product.save((err, product) => {
          if (err) {
            return res.status(400).json("Something went wrong");
          }
    
          return res.status(201).json({
            message: "product  Added successfully",
            new: product,
          });
        });
    }
}