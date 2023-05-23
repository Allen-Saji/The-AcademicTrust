import React from "react";
import logo from "../../assets/logo/ktulogo.png";
import classes from "./css/UniversityHomepageheader.module.css";
import logo1 from "../../assets/logo/gandhilogo.png";
const UniversityHomepageHeader = () => {
  return (
    <React.Fragment>
      <div className={classes.heading}>
        <img src={logo} height="110px" alt="logo" />
        <h1 className={classes.mainheading}>
          APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
        </h1>
        <img src={logo1} alt="gandhi" height="120px" />
      </div>
    </React.Fragment>
  );
};
export default UniversityHomepageHeader;
