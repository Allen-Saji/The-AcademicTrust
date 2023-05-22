import React, { useState } from "react";
import logo from "../../assets/logo/school.png";
import classes from "./css/EmployeeHomepageBody.module.css";
import { useNavigate } from "react-router-dom";
const EmployeeHomepageBody = () => {
  const Navigate = useNavigate();
  const employeeHomeClickHandler = () => {
    Navigate("/");
  };
  return (
    <React.Fragment>
      <div className={classes.studenthomepagebody}>
        <div className={classes.studenthomepagesidebar}>
          <div className={classes.sidebartext}>
            <p>Verify Credentials</p>
          </div>
          <div className={classes.spacebetween}></div>
        </div>
        <div className={classes.semesterselectorbody}>
          <div className={classes.semesterselecttext}>
            <p>Enter a public address </p>
          </div>
          <div className={classes.semesterselector}>
            <input type="text" />
          </div>
          <div className={classes.selectorbutton}>
            <button>Verify</button>
          </div>
        </div>
        <div className={classes.navbar}>
          <div className={classes.navbarbutton}>
            <button
              className={classes.homebutton}
              onClick={employeeHomeClickHandler}
            >
              Home
            </button>
          </div>
          <div className={classes.navbarbutton}>
            <button className={classes.credentialbutton}>Credentials</button>
          </div>
        </div>
        <div className={classes.navbarlogobutton}>
          <button className={classes.dropbtn}>
            <img src={logo} alt="" />
          </button>

          <div className={classes.dropdowncontent}>
            <div className={classes.btnimage}>
              <button>Profile</button>
            </div>
            <div className={classes.btnimage}>
              <button>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default EmployeeHomepageBody;
