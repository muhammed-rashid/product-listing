import React, { useEffect, useState } from "react";
import axios from "axios";

import "./category.css";
function Category() {
  const [category, setCategory] = useState([]);
  const [formData, setformData] = useState({
    category: "",
    parentId: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = () => {
    axios
      .get("http://127.0.0.1:3000/api/category")
      .then((res) => {
        setCategory(res.data.categories);
      })
      .catch((err) => console.log(err));
  };

  //add category
  const handleChange = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;

    setformData(newData);
  };

  const addCategory = () => {
    setError("");
    axios
      .post("http://127.0.0.1:3000/api/category", formData)
      .then((res) => {
        setSuccess(res.data.message);
        getCategory();
        
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <div className="container">
            <h4>Admin / Add Category</h4>
          </div>
        </ol>
      </nav>

      <div className="container">
        <div className="row">
          <p className="danger">{error}</p>
          <p className="success">{success}</p>
          <div className="col-md-6">
            <div className="">
              <label className="form-label">Category Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Category Name"
                name="category"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <label className="form-label">Select Parent Category</label>
              <select
                className="form-select"
                aria-label="Select Parent"
                onChange={handleChange}
                name="parentId"
              >
                <option value=""></option>
                {category.map((ele) => {
                  return <option value={ele._id}>{ele.name}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <button type="button" className="btn  mt-3" onClick={addCategory}>
          Add Category
        </button>
      </div>
    </div>
  );
}

export default Category;
