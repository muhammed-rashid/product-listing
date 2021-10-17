import React from 'react'
import './layout.css'

import {
  BrowserRouter as Router,Link} from "react-router-dom";
function AdminLayout() {
    return (
        <div>
            <header>
                <ul>
             
                    <li>
                        <Link to="/categories">Categories</Link></li>
                    <li>
                        <Link to="/products">Products</Link></li>
                    <li>
                        <Link to="/add-product">Add Product</Link></li>
                  
                </ul>
               
            </header>
        </div>
    )
}

export default AdminLayout
