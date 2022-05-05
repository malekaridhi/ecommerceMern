import React,{useState,useEffect} from 'react';
import "./newProduct.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from 'axios';
const NewPrpduct = () => {
  const [inputs, setInputs] = useState({});
  const [image, setPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const onImageChange = (e)=>{
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "ktzq171m");
    formData.append("file", files);
    setLoading(true);
    axios
      .post("	https://api.cloudinary.com/v1_1/dvl9yijld/image/upload", formData)
      .then((res) => {
        setPicture(res.data.secure_url);
        console.log("image", image);
      })
      .then(setLoading(false))
      .catch((err) => console.log(err));
  }
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
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
            onChange={onImageChange} 
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