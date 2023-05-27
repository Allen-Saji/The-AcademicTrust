import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
import logo from "../../assets/logo/university.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UniversityAllInstitution from "./UniversityAllInstitution";
import UniversityHome from "./UniversityHome";
import UniversityCourse from "./UniversityCourse";
import UniversityResults from "./UniversityResults";
import UniversityCertificate from "./UniversityCertificate";
import UniversityCertificateGenerator from "./UniversityCertificateGenerator";
const UniversityHomepageBody = () => {
  const Navigate = useNavigate();
  //states for top navbar
  const [home, setHome] = useState(false);
  const [institution, setInstitution] = useState(true);
  const [course, setCourse] = useState(false);
  const [result, setResult] = useState(false);
  const [certificate, setCertificate] = useState(false);

  const logoutClickHandler = () => {
    Navigate("/");
  };
  //Handler for all top navbar
  const homeButtonHandler = () => {
    setHome(true);
    setInstitution(false);
    setCourse(false);
    setResult(false);
    setCertificate(false);
  };
  const institutionClickHandler = () => {
    setInstitution(true);
    setCourse(false);
    setResult(false);
    setCertificate(false);
    setHome(false);
  };
  const courseClickHandler = () => {
    setCourse(true);
    setInstitution(false);
    setResult(false);
    setCertificate(false);
    setHome(false);
  };

  const resultClickHandler = () => {
    setResult(true);
    setCertificate(false);
    setInstitution(false);
    setCourse(false);
    setHome(false);
  };
  const certificateClickHandler = () => {
    setCertificate(true);
    setInstitution(false);
    setCourse(false);
    setResult(false);
    setHome(false);
  };

  // Dynamic Styles for Top Navbar
  const homeStyle = home ? "resultButtonActive" : "resultButton";
  const institutionStyle = institution ? "resultButtonActive" : "resultButton";
  const courseStyle = course ? "resultButtonActive" : "resultButton";
  const resultStyle = result ? "resultButtonActive" : "resultButton";
  const certificateStyle = certificate ? "resultButtonActive" : "resultButton";

  return (
    <React.Fragment>
      <div className={classes.universityhomepagebody}>
        {home && <UniversityHome />}
        {institution && <UniversityAllInstitution />}
        {course && <UniversityCourse />}
        {result && <UniversityResults />}
        {certificate && <UniversityCertificate />}
        <div className={classes.navbar}>
          <button onClick={homeButtonHandler} className={homeStyle}>
            Home
          </button>

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
            <button className={classes.dropbtn}>
              <img src={logo} alt="" />
            </button>
            <div className={classes.dropdowncontent}>
              <button onClick={logoutClickHandler}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      {certificate && <UniversityCertificateGenerator />}
    </React.Fragment>
  );
};
export default UniversityHomepageBody;
