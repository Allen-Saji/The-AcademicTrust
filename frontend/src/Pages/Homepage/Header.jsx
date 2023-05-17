import React from "react";
import classes from './css/Header.module.css';
import logo from '../../assets/logo/logo1.png'
import DashBoard from "./DashBoard";
import Body from "./Body";

const Header = props =>{
    return (
      <React.Fragment>
        <div className={classes.heading}>
          <img src={logo} alt="logo" />
          <h1 className={classes.mainheading}>
           APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
          </h1>
          <p className={classes.headerP1}>celebrating 96 years of service</p>
        </div>
       <DashBoard />
       <Body />
      </React.Fragment>
    );
    
}
export default Header;