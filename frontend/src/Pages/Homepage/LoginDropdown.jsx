import React from "react";
import classes from "./css/LoginDropdown.module.css";
import { useNavigate } from "react-router-dom";
import student from "../../assets/logo/school.png";
import university from "../../assets/logo/university.png";
import employee from "../../assets/logo/employee.svg";
const LoginDropdown = (props) => {
  const navigate = useNavigate();
  function University() {
    navigate("/university/login");
  }
  function Student() {
    navigate("/student/login");
  }
  function Employer() {
    navigate("/employer/login");
  }
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>Login</button>
      <div className={classes.dropdowncontent}>
        <div className={classes.btnimage}>
          <img src={university} alt="" />
          <button onClick={University}>University</button>
        </div>
        <div className={classes.btnimage}>
          <img src={student} alt="" />
          <button onClick={Student}>Student</button>
        </div>
        <div className={classes.btnimage}>
          <img src={employee} alt="" />
          <button onClick={Employer}>Employer</button>
        </div>
      </div>
    </div>
  );
};
export default LoginDropdown;
