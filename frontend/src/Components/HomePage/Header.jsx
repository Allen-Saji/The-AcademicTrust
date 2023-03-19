import React from "react";
import classes from './Header.module.css';
import logo from '../../assets/logo/logo.png'
import DashBoard from "./DashBoard";
import LeftDashBoard from "./LeftDashBoard";
import Homepage from "./HomePage";
import Announcement from "./Announcements";
const Header = props =>{
    return (
      <React.Fragment>
        <div className={classes.heading}>
          <img src={logo} alt="logo" />
          <h1>
            AIMIL BIJ JOSEPH TECHNOLOGICAL UNIVERSITY
          </h1>
          <p className={classes.headerP1}>celebrating 96 years of service</p>
        </div>
        <DashBoard />
        <LeftDashBoard />
        <Homepage />
        <Announcement />
      </React.Fragment>
    );
    
}
export default Header;