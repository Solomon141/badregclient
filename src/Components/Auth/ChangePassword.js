import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState();
  const [pwd, setPwd] = useState();
  const [cpwd, setCpwd] = useState();

  const changePassword = () => {};

  return (
    <div className="App">
      <div className="App-header" style={{ color: "black" }}>
        <div className="col-sm-4"> </div>

        <div className="col-sm-4">
          <div
            style={{ paddingTop: 50 }}
            className="min-vh-100 d-flex flex-column align-items-center"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Old Passsword"
              onChange={(e) => setOldPassword(e.target.value)}
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
            <Button onClick={changePassword}> Change Password </Button>
          </div>
        </div>
        <div className="col-sm-4"> </div>
      </div>
    </div>
  );
}

export default ChangePassword;
