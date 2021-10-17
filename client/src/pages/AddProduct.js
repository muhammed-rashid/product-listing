
import React, { useEffect, useState } from "react";
import axios from 'axios'
function AddProduct() {
  const [category, setCategory] = useState([]);
  const [product,setProduct] = useState({
    productName:'',
    category:'',
    discription:''
  })

  const [error,setError] = useState('')

  const getCategory = ()=>{
    axios
    .get("http://127.0.0.1:3000/api/category")
    .then((res) => {
      setCategory(res.data.categories);
    })
    .catch((err) => console.log(err));
}
  useEffect(() => {
    getCategory()
  }, []);

  //add product
  const handleChange = (e) => {
    const newData = { ...product };
    newData[e.target.name] = e.target.value;
console.log(newData);
    setProduct(newData);
  };

  const addProduct = ()=>{
      axios.post("http://127.0.0.1:3000/api/product",product).then((res)=>{
        window.location.href= '/products'
          
      }).catch(err=>{
        setError(err.response.data.error)
      })
  }



    return (
        <div>
        <nav>
          <ol className="breadcrumb">
            <div className="container">
              <h4>Admin / Add Product</h4>
            </div>
          </ol>
        </nav>
  
        <div className="container">
          <div className="row">
          <p className="danger">{error}</p>
       
            <div className="col-md-6">
              <div className="">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category Name"
                  name="productName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <label className="form-label">Select Category</label>
                <select className="form-select" name="category"   onChange={handleChange}>
                <option value=""></option>
                {category.map((ele) => {
                  return <option value={ele._id}>{ele.name}</option>;
                })}
                </select>
              </div>
            </div>
            <div className="mt-3">
    <label  className="form-label">Example textarea</label>
    <textarea className="form-control"  rows="5" name="discription"   onChange={handleChange}></textarea>
  </div>
          </div>
          <button type="button" className="btn  mt-3" onClick={addProduct}>
            Add Product
          </button>
        </div>
      </div>
    )
}

export default AddProduct
