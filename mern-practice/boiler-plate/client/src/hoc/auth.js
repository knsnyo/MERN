import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default (SpecificComponent, option, adminRoute = null) => {
  const AuthenticationCheck = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        // console.log(res);
        if (false === res.payload.isAuth) {
          if (true === option) {
            navigate("/login");
          }
        } else {
          if (true === adminRoute && false === res.payload.isAdmin) {
            navigate("/");
          } else {
            if (false === option) {
              navigate("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};
