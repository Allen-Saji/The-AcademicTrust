import React from "react";
import logo from '../../../assets/logo/ktulogo.png';
import student from '../../../assets/logo/school.png';
import logo1 from '../../../assets/logo/gandhilogo.png';
import classes from "./StudentLoginPageCss.module.css"
const StudentLoginHeader = ()=>{
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