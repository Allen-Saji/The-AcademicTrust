import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginOrg } from "../../../features/auth/authSlice";
import classes from "./EmployerLoginPageCss.module.css";

const EmployerLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginOrg(userData))
      .unwrap()
      .then((user) => {
        // NOTE: by unwrapping the AsyncThunkAction we can navigate the user after
        // getting a good response from our API or catch the AsyncThunkAction
        // rejection to show an error message
        toast.success(`Logged in as ${user.name}`);
        navigate("/organization/homepage");
      })
      .catch(toast.error);
  };
  return (
    <React.Fragment>
      <div>
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.username}>
            <div className={classes.usernamelabel}>
              <label htmlFor="username">Email</label>
            </div>
            <input
              className={classes.employerlogininput}
              onChange={onChange}
              name="email"
              type="text"
              id="username"
            />
          </div>
          <div className={classes.password}>
            <div className={classes.passwordnamelabel}>
              <label htmlFor="password">Password</label>
            </div>
            <input
              className={classes.employerlogininput}
              onChange={onChange}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button className={classes.loginbutton}>Login</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EmployerLoginForm;
