import React from "react";
import classes from './css/Header.module.css';
import logo from '../../assets/logo/ktulogo.png'
import logo1 from '../../assets/logo/gandhilogo.png';
import DashBoard from "./DashBoard";
import Body from "./Body";

const Header = props =>{
    return (
      <React.Fragment>
        <div className={classes.heading}>
          <img src={logo} height='140px' alt="logo" />
          <h1 className={classes.mainheading}>
           APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
          </h1>
          <img src={logo1} alt="gandhi" height='120px' />
        </div>
       <DashBoard />
       <Body />
      </React.Fragment>
    );
    
}
export default Header;