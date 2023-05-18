import React from "react";
import logo from '../../assets/logo/ktulogo.png'
import classes from './StudentHeader.module.css'
import Navbar from "./Navbar";
const StudentHeader = () =>{
    return(
        <React.Fragment>
            <div>
                <div className={classes.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={classes.mainbody}>
                    <div className={classes.sidebar}>
                       <div className={classes.heading}>
                        <h4>Update contact info</h4>
                        <div className={classes.between}></div>
                       </div>
                    </div>
                    <div className={classes.navbar}>
                       <Navbar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default StudentHeader;