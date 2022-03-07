import React from 'react';
import "./product.css"
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import {productData} from "../../dummyData"
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
                     />
                </div>
                <div className="productTopRight">
                    <img src="" alt="" className="productInfoImage" />
                    <span className="productName">Name</span>
                </div>
            </div>
            <div className="productBottom">

            </div>
        </div>
     );
}
 
export default Product;