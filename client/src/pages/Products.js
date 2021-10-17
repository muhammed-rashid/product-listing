import React, { useEffect, useState } from "react";
import axios from "axios";
import "./menu.css";
function Products() {
  const [category, setCategory] = useState([]);
const [sorted,setsorted] = useState([])
  const getCategory = () => {
    axios
      .get("http://127.0.0.1:3000/api/category")
      .then((res) => {
        setCategory(res.data.categories);
        
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCategory();
    
  }, []);

  const createCategories = (categories, parentId = null) => {
    const categoryList = [];
    let catgry;
    if (parentId == null) {
      catgry = categories.filter((cat) => cat.parentId == undefined);
    } else {
      catgry = categories.filter((cat) => cat.parentId == parentId);
    }
    for (let cate of catgry) {
      categoryList.push({
        _id: cate._id,
        category: cate.category,
        slug: cate.slug,
        children: createCategories(categories, cate._id),
      });
    }

    return categoryList;
  };
 
if(category.length>0){
  let sorteddata = createCategories(category)

}
  
  
  
  return (
    <div>
      <ul className="top-level-menu">
        <li>
          <a href="#">Offices</a>
          <ul className="second-level-menu">
            <li>
              <a href="#">New York</a>
              <ul className="third-level-menu">
                <li>
                  <a href="#">Information</a>
                </li>
                <li>
                  <a href="#">Book a Meeting</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Products;
