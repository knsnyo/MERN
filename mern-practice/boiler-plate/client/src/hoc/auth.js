import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default (SpecificComponent, option, adminRoute = null) => {
  const AuthenticationCheck = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (true === option && false === res.payload.isAuth){
          navigate("/login");
        } else if (false === option && true === res.payload.isAuth){
          console.log(res.payload.isAuth)
          navigate("/");
        } else if (true === adminRoute && false === res.payload.isAdmin){
          navigate("/")
        }
      });
    }, []);

    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};
