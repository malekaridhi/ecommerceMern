import React from "react";
import "./newUser.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import {useSelector} from "react-redux";
import axios from 'axios';
import { useDispatch } from 'react-redux';

const NewUser = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newUser">
          <h1 className="userTitle">New User</h1>
          <div className="newUserContainer">
            <form className="newUserForm">
              <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="harry" />
              </div>
              <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="Harry Potter" />
              </div>
              <div className="newUserItem">
                <label>Email</label>
                <input type="text" placeholder="harry@gmail.com" />
              </div>
              <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="password" />
              </div>
              <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+216 20 666 666" />
              </div>
              <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="Hogworts school | UK" />
              </div>
              <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="Female"
                    value="Female"
                  />
                  <label for="female">Female</label>
                  <input type="radio" name="gender" id="other" value="other" />
                  <label for="other">Other</label>
                </div>
              </div>
              <div className="newUserItem">
                <label>Active</label>
                <select name="active" id="active" className="newUserSelect">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <button className="newUserButton">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewUser;
