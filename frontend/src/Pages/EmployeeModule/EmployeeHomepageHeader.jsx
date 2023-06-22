import React from "react";
import logo from "../../assets/logo/ktulogo.png";
import classes from "./css/EmployeeHomepageHeader.module.css";
import logo1 from '../../assets/logo/gandhilogo.png';
import { useNavigate } from "react-router-dom";

const EmployeeHomepageHeader = () => {
  const Navigate =     useNavigate();
  const clickHandler=()=>{
    Navigate('/');
  }
  return (
    <React.Fragment>
      <div className={classes.heading}>
        <button className="logobutton" onClick={clickHandler}>
          <img src={logo} height="110px" alt="logo" />
        </button>
        
        <h1 className={classes.mainheading}>
          APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
        </h1>
        <img src={logo1} alt="gandhi" height="120px" />
      </div>
    </React.Fragment>
  );
};
export default EmployeeHomepageHeader;
