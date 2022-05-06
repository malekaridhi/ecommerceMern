import React, { useEffect, useMemo, useState } from "react";
import "./product.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import image from "../../images/c1.jpg";
import image1 from "../../images/c2.jpg";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector } from "react-redux";
import { userRequest } from "../../reqMethods";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { updateProduct } from "../../redux/reducers/apiReq";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
 
  const dispatch = useDispatch()

  const [productStats, setProductStats] = useState([]);
  const [inputs, setInputs] = useState({});
  const [image, setPicture] = useState("");
 
  const [loading, setLoading] = useState(false);
  const onImageChange = (e) => {
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
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
 
  const handleClick = (id,e) => {
    e.preventDefault();
    if (image ===""){
      let product = {...inputs}
      console.log("sec");
    updateProduct(id,product,dispatch)
    }else {

      let product = {  ...inputs, img: image};
      console.log(image)
      updateProduct(id,product,dispatch);
    }
    console.log(product)
  };
  console.log(inputs, image)
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
 ;
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={productStats}
                dataKey="Sales"
                title="Sales Performance"
                grid
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product.img} alt="" className="productInfoImage" />
                <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productItemKey">Id </span>
                  <span className="productItemValue"> {product._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productItemKey">Sales </span>
                  <span className="productItemValue">5123</span>
                </div>

                <div className="productInfoItem">
                  <span className="productItemKey">In stock </span>
                  <span className="productItemValue">{product.inStock}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input name="title"type="text" placeholder={product.title} onChange={handleChange}/>
                <label>Product Description</label>
                <input name="desc" type="text" placeholder={product.desc} onChange={handleChange}/>
                <label>Price</label>
                <input name="price" type="text" placeholder={product.price} onChange={handleChange} />
                <label>In Stock</label>
                <select name="inStock" id="inStock" onChange={handleChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src={product.img} alt="" className="productUploadImg" />
                  <label forhtml="file">  
                    <PublishIcon />
                  </label>
                  <input type="file" id="file" onChange={onImageChange} />
                </div>
                <button className="productButton" onClick={(e) => handleClick(productId,e)}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
