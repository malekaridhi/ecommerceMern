import React from 'react';
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import image from "../../images/a2.jpg"
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
        field: 'transaction',
        headerName: 'Transaction',
        width: 90,
      },
    ,
  ];
  
  const rows = [
    { id: 1, username: 'Jon Snow', avatar: {image}, email: "jon@gmail.com",status:"active",transaction:"500DT" },
    { id: 2, username: 'Jon Snow', avatar: {image}, email: "jon@gmail.com",status:"active",transaction:"500DT" },
    { id: 3, username: 'Jon Snow', avatar: {image}, email: "jon@gmail.com",status:"active",transaction:"500DT" },
    { id: 4, username: 'Jon Snow', avatar: {image}, email: "jon@gmail.com",status:"active",transaction:"500DT" },
    { id: 5, username: 'Jon Snow', avatar: {image}, email: "jon@gmail.com",status:"active",transaction:"500DT" },
    { id: 6, username: 'Jon Snow', avatar: {image}, email: "jon@gmail.com",status:"active",transaction:"500DT" },
    { id: 7, username: 'Jon Snow', avatar: {image}, email: "jon@gmail.com",status:"active",transaction:"500DT" },

  ];
  
const UserList = () => {
    return ( 
        <div className="userList">
<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
        </div>
     );
}
 
export default UserList;