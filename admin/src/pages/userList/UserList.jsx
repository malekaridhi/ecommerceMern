import React,{useState,useEffect} from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { UserRows } from "../../dummyData";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch,useSelector } from "react-redux";
import { getUser,deleteUser } from "../../redux/reducers/apiReq";
const UserList = () => {
  const [data,setData]= useState(UserRows)
  const dispatch = useDispatch()
  const users = useSelector(state=>state.user)
  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);
  console.log(users);
  const handleDelete = (id) =>{
    setData(data.filter(item=>item.id !== id))
  }
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
              <Link to={"/users/"+params.row.id}>
          {/* //    <button className="userlistEdit">Edit</button>  */}
             <EditIcon className="userListEdit"/>
              </Link>
             <DeleteIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
             </>
          )
      }
    },
    
  ];
  return (
    <>
    <Topbar/>
    <div className="container">
      <Sidebar />  
    <div className="userList">
      <div
        style={{
          margin: "20px",
          height: 490,
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
    </div>
    </>
  );
};

export default UserList;
