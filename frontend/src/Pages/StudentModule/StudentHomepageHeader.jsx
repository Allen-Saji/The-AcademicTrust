import React from 'react';
import logo from '../../assets/logo/ktulogo.png';
import classes from './css/StudentHomepageheader.module.css'
const StudentHomepageHeader = ()=>{
    return(
        <React.Fragment>
            <div className={classes.logo}>
                <img src={logo} alt="Ktu logo" />
            </div>
        </React.Fragment>
    );
};
export default StudentHomepageHeader;