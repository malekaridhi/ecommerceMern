import React,{useState,useEffect} from 'react';
import "./newProduct.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
const NewPrpduct = () => {
    return ( 
      <>
      <Topbar/>
      <div className='container'>
      <Sidebar/>
        <div className="newProduct">
             <h1 className="addProductTitle">New Product</h1>
             <div className="newUserContainer">
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            
            />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Title..."
            
            />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="DT"
            
          />
        </div>
        {/* <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans,skirts"  />
        </div> */}
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button  className="addProductButton">
          Create
        </button>
      </form>
               </div>
        </div>
            </div>
            </>
     );
}
 
export default NewPrpduct;