import React, { useState, useEffect } from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { deleteProduct, getProduct } from "../../redux/reducers/apiReq";
import { useDispatch,useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
const ProductList = () => {
  // const [data, setData] = useState(productRows);

  const dispatch = useDispatch()
  const products = useSelector(state=>state.product.products)

  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
     deleteProduct(id,dispatch)
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 210 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="productListProducr">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    
    {
      field: "price",
      headerName: "Price ",
      width: 190,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              {/* //    <button className="userlistEdit">Edit</button>  */}
              <EditIcon className="productListEdit" />
            </Link>
            <DeleteIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="productList">
      <div
        style={{
          margin: "20px",
          height: 540,
          width: "97%",
          backgroundColor: "#1e1e1e",
        }}
        >
        <DataGrid
          options={{
            paging: false,
          }}
          style={{ color: "rgb(155, 151, 151)" }}
          rows={products}
          columns={columns}
          disableSelectionOnClick
          getRowId={(row)=>row._id}
          pageSize={8}
          // rowsPerPageOptions={[100]}
          checkboxSelection
          />
      </div>
    </div>
          </div>
          </>
  );
};

export default ProductList;
