import React from "react";
import { Link } from "react-router-dom";

function EmailSentPage() {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        paddingTop: 20,
      }}
    >
      <div>
        <h2> We have sent an email </h2>
      </div>
      <div
        style={{
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        please check your inbox and confirm your Email
      </div>

      <Link to="/Login">Login</Link>
    </div>
  );
}

export default EmailSentPage;
