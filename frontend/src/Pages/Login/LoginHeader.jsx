import React from "react";
import logo from '../../assets/logo/logo1.png'
import student from '../../assets/logo/school.png'
import university from '../../assets/logo/university.png'
import institution from '../../assets/logo/institution.png'
import classes from "./loginPageCss.module.css"
const LoginHeader = ()=>{
    return (
      <React.Fragment>
        <div className={classes.mainLogo}>
        <img src={logo} className={classes.logo} alt="" />
        </div>
        <div className={classes.logos}>
          <div>
            <img src={student} className={classes.student} alt="" />
            <p className={classes.studentlogoname}>Student</p>
          </div>
          <div>
            <img src={university} className={classes.university} alt="" />
            <p className={classes.universitylogoname}>University</p>
          </div>
          <div>
            <img src={institution} className={classes.institution} alt="" />
            <p className={classes.institutionnlogoname}>Institution</p>
          </div>
          <div>
            <label className={classes.labelsignin}>Sign In</label>
          </div>
        </div>
        
      </React.Fragment>
    );
};

export default LoginHeader;