import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);

  if (!auth.isAuthenticated) {
    navigate("/Login");
  }

  return (
    <div className="container">
      <h1> THIS is Dashboard </h1>
    </div>
  );
}

export default Dashboard;
