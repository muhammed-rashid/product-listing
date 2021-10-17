
import Header from './layouts/AdminLayout'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Category from './pages/Category'
import Product from './pages/Products'
import AddProduct from './pages/AddProduct';
function App() {
  return (
    <Router>
    <div className="App">
      
    
     <Header/>
    
          <Route path="/categories">
          <Category></Category>
          </Route>
          <Route path="/products">
           <Product/>
          </Route>
          <Route path="/add-product">
            <AddProduct/>
          </Route>
       
       
    </div>
    </Router>
   
  );
}

export default App;
