import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (true === res.data.success) {
        navigate("/login");
      } else {
        alert("failed logout");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>LandingPage</h2>
      <button onClick={onClickHandler}>logout</button>
    </div>
  );
}

export default LandingPage;
