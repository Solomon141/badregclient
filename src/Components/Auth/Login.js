import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Redux/ConfigConstants";

import { useDispatch } from "react-redux";
import { userlogin, userregister } from "./authSlice";

import { ToastContainer, toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toastLogin_failed = (errmsg) => toast.error(errmsg);
  const toastLogin_success = (successMessage) => toast.success(successMessage);

  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const loginButton = () => {
    console.log("login start");
    axios
      .post(`${BASE_URL}compuser/login`, {
        email: email,
        password: pwd,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.error) {
          toastLogin_failed(res.data.message);
        } else {
          toastLogin_success(res.data.message);
          dispatch(userlogin({ responseData: res.data }));
          setTimeout(() => navigate("/Dashboard"), 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <ToastContainer
        autoClose={500}
        hideProgressBar={true}
        theme="colored"
        newestOnTop={false}
      />

      <h1>Login page</h1>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4"> </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div
            style={{ paddingTop: 50 }}
            className="min-vh-100 d-flex flex-column"
          >
            <label> Email : </label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ paddingTop: 10 }}></div>
            <label> Password : </label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
            />
            <div style={{ paddingTop: 40 }}></div>
            <Button onClick={loginButton}> Login </Button>
            <Link style={{ paddingTop: 40 }} to="/Register">
              <div className="align-items-center">Register</div>
            </Link>
          </div>
          {/* </div> */}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4"> </div>
      </div>
    </div>
  );
}

export default Login;
