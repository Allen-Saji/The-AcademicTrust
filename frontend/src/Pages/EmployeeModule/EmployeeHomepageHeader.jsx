import React from "react";
import logo from "../../assets/logo/ktulogo.png";
import classes from "./css/EmployeeHomepageHeader.module.css";
const EmployeeHomepageHeader = () => {
  return (
    <React.Fragment>
      <div className={classes.logo}>
        <img src={logo} alt="Ktu logo" />
      </div>
    </React.Fragment>
  );
};
export default EmployeeHomepageHeader;
