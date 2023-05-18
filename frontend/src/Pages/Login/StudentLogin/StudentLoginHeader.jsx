import React from "react";
import logo from '../../../assets/logo/ktulogo.png'
import student from '../../../assets/logo/school.png'
import classes from "./StudentLoginPageCss.module.css"
const StudentLoginHeader = ()=>{
    return (
      <React.Fragment>
        <div className={classes.mainLogo}>
        <img src={logo} height='120px' className={classes.logo} alt="" />
        </div>
        <div className={classes.logos}>
          <div>
            <img src={student} className={classes.student} alt="" />
            <p className={classes.studentlogoname}>Student Sign In</p>
          </div>
          <div>
            <label className={classes.labelsignin}>Sign In</label>
          </div>
        </div>
        
      </React.Fragment>
    );
};

export default StudentLoginHeader;