import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import image from "../../images/c1.jpg";
import image1 from "../../images/c2.jpg";
import PublishIcon from "@mui/icons-material/Publish";
const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
            grid
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={image} alt="" className="productInfoImage" />
            <span className="productName">White Dress</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productItemKey">Id </span>
              <span className="productItemValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productItemKey">Sales </span>
              <span className="productItemValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productItemKey">Active </span>
              <span className="productItemValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productItemKey">In stock </span>
              <span className="productItemValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="White Dress" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={image1} alt="" className="productUploadImg" />
              <label for="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
