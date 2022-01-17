import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      console.log(res.data);
    });
  }, []);

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(res => {
      if(true === res.data.success){
        navigate('/login')
      } else {
        alert('failed logout')
      }
    })
  }

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
      <br />
      <br/>
      <button onClick={onClickHandler}>logout</button>
    </div>
  );
}

export default LandingPage;
