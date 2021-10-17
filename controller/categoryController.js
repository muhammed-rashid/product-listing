const Category = require("../model/category");
var slugify = require("slugify");
module.exports = categoryController = {
  addCategory: async (req, res) => {
    const { category } = req.body;

    if (!category) {
      return res.status(500).json({ error: "Category Name is required" });
    }
    //save to the database as a new category
    const categoryObj = {
      name: category,
      slug: slugify(category),
    };

    if (req.body.parentId) {

      categoryObj.parentId = req.body.parentId;
    }

    let new_category = new Category(categoryObj);
    new_category.save((err, cat) => {
      if (err) {
        return res.status(500).json("Something went wrong");
      }

      return res.status(201).json({
        message: "Category Added successfully",
        new: cat,
      });
    });
  },

  getCategory: (req, res) => {
    Category.find().exec((error,categories)=>{
      

       return res.status(200).json({
            categories
        })
    })
















  },
};
