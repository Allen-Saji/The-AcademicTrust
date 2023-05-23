import React from "react";
import logo from '../../../assets/logo/ktulogo.png'
import university from '../../../assets/logo/university.png'
import classes from "./UniversityLoginPageCss.module.css"
import logo1 from "../../../assets/logo/gandhilogo.png";
const UniversityLoginHeader = ()=>{
    return (
      <React.Fragment>
        <div className={classes.heading}>
        <img src={logo} height="110px" alt="logo" />
        <h1 className={classes.mainheading}>
          APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
        </h1>
        <img src={logo1} alt="gandhi" height="120px" />
      </div>
        <div className={classes.logos}>
          <div>
            <img src={university} className={classes.university} alt="" />
            <p className={classes.universitylogoname}>University Sign In</p>
          </div>
          <div>
            <label className={classes.labelsignin}>Sign In</label>
          </div>
        </div>
        
      </React.Fragment>
    );
};

export default UniversityLoginHeader;