import React from "react";
import classes from './css/LoginDropdown.module.css'
import { useNavigate } from "react-router-dom";
const LoginDropdown = (props) => {
    const navigate = useNavigate();
    function University(){
        navigate('/UniversityLogin');
    }
    function Student(){
        navigate('/StudentLogin');
    }
    function Employer(){
        navigate('/EmployerLogin');
    }
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>Login</button>
      <div className={classes.dropdowncontent}>
        <button onClick={University} >University</button>
        <button onClick={Student}>Student</button>
        <button onClick={Employer}>Employer</button>
      </div>
    </div>
  );
};
export default LoginDropdown;