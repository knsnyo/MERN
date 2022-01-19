import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  // navigate
  const navigate = useNavigate()
  
  // react-redux
  const dispatch = useDispatch();

  //useState
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // handler
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
    // setPassword(event.target.value)
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(
      `Email: ${Email}
      Password:${Password}`)

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((res) => {
      console.log(`login success: ${res.body}`)
      if(true === res.payload.loginSuccess){
        // alert("login success")
        navigate('/')
      } else {
        alert("무언가의 오류")
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
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <br />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
