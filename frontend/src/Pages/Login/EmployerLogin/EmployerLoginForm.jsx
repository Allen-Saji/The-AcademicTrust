import React from "react";
import classes from "./EmployerLoginPageCss.module.css"

const EmployerLoginForm = () => {
  return (
    <React.Fragment>
      <div>
        <form className={classes.form}>
          <div className={classes.username}>
            <div className={classes.usernamelabel}>
              <label htmlFor="username">Username</label>
            </div>
            <input className={classes.employerlogininput} type="text" id="username" />
          </div>
          <div className={classes.password}>
            <div className={classes.passwordnamelabel}>
              <label htmlFor="password">Password</label>
            </div>
            <input className={classes.employerlogininput} type="text" id="password" />
          </div>
          <button className={classes.loginbutton}>Login</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EmployerLoginForm;