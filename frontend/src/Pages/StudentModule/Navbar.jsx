import React from "react";
import logo from '../../assets/logo/school.png'
import classes from './Navbar.module.css';
import DropdownButton from "./DropdownButton";

const Navbar = ()=>{
    return (
      <React.Fragment>
        <div className={classes.navbuttons}>
          <button className={classes.button}>Home</button>
          <button className={classes.button}>Student</button>
          <button className={classes.button}>Exam</button>
          <button className={classes.button}>Result</button>
          <div className={classes.onnavbutton}>
            <DropdownButton />
          </div>
          
        </div>
        
        
      </React.Fragment>
    );
};
export default Navbar;