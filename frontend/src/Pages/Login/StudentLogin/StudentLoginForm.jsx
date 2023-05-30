import classes from "./StudentLoginPageCss.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import React from "react";
const StudentLoginForm = () => {
  const [formData, setFormData] = useState({
    registration_no: "",
    password: "",
  });
  const { registration_no, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      registration_no,
      password,
    };

    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        // NOTE: by unwrapping the AsyncThunkAction we can navigate the user after
        // getting a good response from our API or catch the AsyncThunkAction
        // rejection to show an error message
        toast.success(`Logged in as ${user.name}`);
        navigate("/student/homepage");
      })
      .catch(toast.error);
  };
  return (
    <React.Fragment>
      <div>
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.username}>
            <div className={classes.usernamelabel}>
              <label htmlFor="username">Registration No:</label>
            </div>
            <input
              className={classes.studentforminput}
              type="text"
              id="username"
              onChange={onChange}
              name="registration_no"
              value={registration_no}
            />
          </div>
          <div className={classes.password}>
            <div className={classes.passwordnamelabel}>
              <label htmlFor="password">Password:</label>
            </div>
            <input
              className={classes.studentforminput}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <button className={classes.loginbutton}>Login</button>
        </form>
      </div>
    </React.Fragment>
  );
};
export default StudentLoginForm;
