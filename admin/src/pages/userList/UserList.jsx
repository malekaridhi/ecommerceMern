import React from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { UserRows } from "../../dummyData";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 190,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell:(params)=>{
        return(
            <>
        {/* //    <button className="userlistEdit">Edit</button>  */}
           <EditIcon className="userListEdit"/>
           <DeleteIcon className="userListDelete"/>
           </>
        )
    }
  },
  ,
];


const UserList = () => {
  return (
    <div className="userList">
      <div
        style={{
          margin: "20px",
          height: 475,
          width: "97%",
          backgroundColor: "#1e1e1e",
        }}
      >
        <DataGrid
        options={{
            paging: false
        }}
          style={{ color: "rgb(155, 151, 151)" }}
          rows={UserRows}
          columns={columns}
          disableSelectionOnClick
          pageSize={8}
         rowsPerPageOptions={[10]}
         
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserList;
