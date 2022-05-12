import React,{useState,useEffect} from "react";
import "./user.css";
import image from "../../images/b3.jpg";
import image1 from "../../images/b4.jpg";
import Avatar from "@mui/material/Avatar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";
import { Link, useLocation  } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { useSelector } from "react-redux";
import BadgeIcon from '@mui/icons-material/Badge';
import { updateUser } from "../../redux/reducers/apiReq";
const User = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );
  
 console.log(user.isAdmin)
  const dispatch = useDispatch()
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
      let user = {...inputs}
      console.log("sec");
    updateUser(id,user,dispatch)
    }else {

      let user = {  ...inputs, img: image};
      console.log(image)
      updateUser(id,user,dispatch);
    }
    console.log(user)
  };
  console.log(inputs, image)
  return (
    <>
    <Topbar/>
    <div className="container">
     <Sidebar/>
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        {/* <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link> */}
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <Avatar src={image} className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">@{user.username}</span>
              {/* <span className="userShowUserTitle">Web Developper</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <BadgeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Admin:{user.isAdmin.toString()}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              {/* <PhoneAndroidIcon className="userShowIcon" /> */}
              {/* <span className="userShowInfoTitle">+216 20 555 555</span> */}
            </div>

            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Tunis | Tunisia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder={user.username}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Rachel Green"
                  />
              </div> */}
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder={user.email}
                  onChange={handleChange}
                  />
              </div>
              {/* <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+216 20 555 555"
                  />
              </div> */}
              <div className="userUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Tunis | Tunisia"
                  />
              </div>
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={user.img} alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" 
                style={{ display: "none" }}
                 onChange={onImageChange}/>
              </div>
            </div>
          </form>
              <button className="userUpdateButton"onClick={(e) => handleClick(userId,e)}>Update</button>
        </div>
      </div>
                  </div>
    </div>
      </>
  );
};

export default User;
