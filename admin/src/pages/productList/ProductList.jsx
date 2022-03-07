import React,{useState} from 'react';
import "./productList.css"
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data,setData]= useState(productRows)
    const handleDelete = (id) =>{
        setData(data.filter(item=>item.id !== id))
      }
      const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListProducr">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price ",
          width: 190,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell:(params)=>{
              return(
                  <>
                  <Link to={"/product/"+params.row.id}>
              {/* //    <button className="userlistEdit">Edit</button>  */}
                 <EditIcon className="productListEdit"/>
                  </Link>
                 <DeleteIcon className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
                 </>
              )
          }
        },
        
      ];
    return ( 
        <div className="productList">
             <div
        style={{
          margin: "20px",
          height: 810,
          width: "97%",
          backgroundColor: "#1e1e1e",
        }}
      >
        <DataGrid
        options={{
            paging: false
        }}
          style={{ color: "rgb(155, 151, 151)" }}
          rows={data}
          columns={columns}
          disableSelectionOnClick
          pageSize={8}
         rowsPerPageOptions={[10]}
         
          checkboxSelection
        />
      </div>
        </div>
     );
}
 
export default ProductList;