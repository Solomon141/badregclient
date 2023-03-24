import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Redux/ConfigConstants";

import Alert from "react-bootstrap/Alert";

function Verify() {
  const { vkey } = useParams();

  const [actResult, setActResult] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}compuser/verify/${vkey}`)
      .then((response) => {
        console.log(response.data);
        setActResult(response.data);
      })
      .catch((error) => {
        console.log(error);
        setActResult();
      });
  }, []);
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <header
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "calc(10px + 2vmin)",
        }}
      >
        <p>
          {actResult.error ? (
            <>
              <Alert key="danger" variant="danger">
                {actResult.message}
              </Alert>
              <p style={{ color: "#f6aaaa" }}>
                Email : badreg_info@badregplc.com
              </p>
              <p style={{ color: "#f6aaaa" }}>Phone Number: 09-35-811-576</p>
            </>
          ) : (
            <Alert key="success" variant="success">
              {actResult.message}
            </Alert>
          )}
        </p>
        <a
          className="App-link"
          href="https://solomon141.github.io/badregclient/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.badregplc.com
        </a>
      </header>
    </div>
  );
}

export default Verify;
