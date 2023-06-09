import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
import logo from "../../assets/logo/university.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import UniversityAllInstitution from "./UniversityAllInstitution";
import UniversityCourse from "./UniversityCourse";
import UniversityResults from "./UniversityResults";
import UniversityCertificate from "./UniversityCertificate";
import UniversityCertificateGenerator from "./UniversityCertificateGenerator";
const UniversityHomepageBody = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  //states for top navbar

  const [institution, setInstitution] = useState(true);
  const [course, setCourse] = useState(false);
  const [result, setResult] = useState(false);
  const [certificate, setCertificate] = useState(false);

  const [logoutStyle,setLogoutStyle] = useState(false);

  const logoutClickHandler = () => {
    Dispatch(logout());
    Navigate("/");
  };
  //Handler for all top navbar

  const institutionClickHandler = () => {
    setInstitution(true);
    setCourse(false);
    setResult(false);
    setCertificate(false);

  };
  const courseClickHandler = () => {
    setCourse(true);
    setInstitution(false);
    setResult(false);
    setCertificate(false);

  };

  const resultClickHandler = () => {
    setResult(true);
    setCertificate(false);
    setInstitution(false);
    setCourse(false);

  };
  const certificateClickHandler = () => {
    setCertificate(true);
    setInstitution(false);
    setCourse(false);
    setResult(false);

  };

  

  // Dynamic Styles for Top Navbar
  const institutionStyle = institution ? "resultButtonActive" : "resultButton";
  const courseStyle = course ? "resultButtonActive" : "resultButton";
  const resultStyle = result ? "resultButtonActive" : "resultButton";
  const certificateStyle = certificate ? "resultButtonActive" : "resultButton";

  const logoutButtinStyle = logoutStyle ? 'setlogoutbutton' : 'dropdowncontent';
  const logoutButtonClickHandler =()=>{
    setLogoutStyle((state)=>!state);
  }

  return (
    <React.Fragment>
      <div className={classes.universityhomepagebody}>
        {institution && <UniversityAllInstitution />}
        {course && <UniversityCourse />}
        {result && <UniversityResults />}
        {certificate && <UniversityCertificate />}
        <div className={classes.navbar}>
          <button
            className={institutionStyle}
            onClick={institutionClickHandler}
          >
            Institution
          </button>

          <button className={courseStyle} onClick={courseClickHandler}>
            Course
          </button>

          <button className={resultStyle} onClick={resultClickHandler}>
            Result
          </button>

          <button
            className={certificateStyle}
            onClick={certificateClickHandler}
          >
            Certificate
          </button>

          <div className={classes.dropdown}>
            <button className={classes.dropbtn} onClick={logoutButtonClickHandler}>
              
              <img src={logo} alt="" />
            </button>
            <div className={logoutButtinStyle}>
              <button className={classes.logoutdropdown} onClick={logoutClickHandler}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      {certificate && <UniversityCertificateGenerator />}
    </React.Fragment>
  );
};
export default UniversityHomepageBody;
