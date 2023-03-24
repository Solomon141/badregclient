import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Redux/ConfigConstants";
import EmailSentPage from "./EmailSentPage";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

function Register() {
  const navigate = useNavigate();
  const toastRegister_failed = (errmsg) => toast.error(errmsg);
  const toastRegister_success = (successMessage) => toast.error(successMessage);

  const [fullName, setFullName] = useState("");
  const [TinNum, setTinNum] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [cpwd, setCpwd] = useState("");

  const auth = useSelector((store) => store.auth);

  const saveButton = () => {
    if (pwd === cpwd) {
      axios
        .post(`${BASE_URL}compuser/save`, {
          Full_Name: fullName,
          RoleID: 101,
          email: email,
          password: pwd,
          TinNum,
          PhoneNum
        })
        .then((response) => {
          console.log("saved");
          navigate(`/EmailSentPage`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toastRegister_failed("password not match");
    }
  };

  return (
    <div className="container">
      <ToastContainer
        autoClose={500}
        hideProgressBar={true}
        theme="colored"
        newestOnTop={false}
      />
      <div className="row">
        <div className="col-sm-4"> </div>
        <div className="col-sm-4">
          <div
            style={{ paddingTop: 50 }}
            className="min-vh-100 d-flex flex-column align-items-center"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            <div style={{ paddingTop: 10 }}></div>
            <input
              type="text"
              className="form-control"
              placeholder="TIN Number"
              onChange={(e) => setTinNum(e.target.value)}
            />
            <div style={{ paddingTop: 10 }}></div>
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNum(e.target.value)}
            />
            <div style={{ paddingTop: 10 }}></div>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ paddingTop: 10 }}></div>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
            />
            <div style={{ paddingTop: 10 }}></div>
            <input
              type="text"
              className="form-control"
              placeholder="Confirm password"
              onChange={(e) => setCpwd(e.target.value)}
            />
            <div style={{ paddingTop: 10 }}></div>
            <Button onClick={saveButton}> REGISTER </Button>
            <div style={{ paddingTop: 10 }}></div>
            <Link to="/Login">Login</Link>
          </div>
        </div>
        <div className="col-sm-4"> </div>
      </div>
    </div>
  );
}

export default Register;
