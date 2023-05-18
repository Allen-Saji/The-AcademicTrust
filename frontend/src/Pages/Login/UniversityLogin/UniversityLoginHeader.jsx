import React from "react";
import logo from '../../../assets/logo/ktulogo.png'
import university from '../../../assets/logo/university.png'
import classes from "./UniversityLoginPageCss.module.css"
const UniversityLoginHeader = ()=>{
    return (
      <React.Fragment>
        <div className={classes.mainLogo}>
        <img src={logo} height='120px' className={classes.logo} alt="" />
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