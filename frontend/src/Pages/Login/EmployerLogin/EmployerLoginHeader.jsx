import React from "react";
import logo from '../../../assets/logo/ktulogo.png'
import institution from '../../../assets/logo/employee.svg'
import classes from "./EmployerLoginPageCss.module.css"
const EmployerLoginHeader = ()=>{
    return (
      <React.Fragment>
        <div className={classes.mainLogo}>
        <img src={logo} height='120px' className={classes.logo} alt="" />
        </div>
        <div className={classes.logos}>
          <div>
            <img src={institution} width='160px' className={classes.institution} alt="" />
            <p className={classes.institutionnlogoname}>Employer Sign In</p>
          </div>
          <div>
            <label className={classes.labelsignin}>Sign In</label>
          </div>
        </div>
        
      </React.Fragment>
    );
};

export default EmployerLoginHeader;