import React from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import image from "../../images/a2.jpg";
import { makeStyles } from "@material-ui/core/styles";
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
  ,
];

const rows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar: `${ image }`,
    email: "jon@gmail.com",
    status: "active",
    transaction: "500DT",
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar: `${ image }`,
    email: "jon@gmail.com",
    status: "active",
    transaction: "500DT",
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar: `${ image }`,
    email: "jon@gmail.com",
    status: "active",
    transaction: "500DT",
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar: `${ image }`,
    email: "jon@gmail.com",
    status: "active",
    transaction: "500DT",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar: `${ image }`,
    email: "jon@gmail.com",
    status: "active",
    transaction: "500DT",
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar: `${ image }`,
    email: "jon@gmail.com",
    status: "active",
    transaction: "500DT",
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar: `${ image }`,
    email: "jon@gmail.com",
    status: "active",
    transaction: "500DT",
  },
];

const UserList = () => {
  return (
    <div className="userList">
      <div style={{ height: 400, width: "100%",backgroundColor:"#1e1e1e" }} >
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
};

export default UserList;
