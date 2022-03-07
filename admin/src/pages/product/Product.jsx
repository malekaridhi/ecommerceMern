import React from 'react';
import "./product.css"
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import {productData} from "../../dummyData"
import image from "../../images/c1.jpg"
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
                            <span className="productItemKey">id:</span>
                            <span className="productItemValue">123:</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="productBottom">

            </div>
        </div>
     );
}
 
export default Product;