import classes from "./css/StudentHomepageBody.module.css";
import logo from "../../assets/logo/school.png";
import React, { useState } from "react";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";
const StudentHomepageBody = () => {
  const [selectSemester, setSelectSemester] = useState(true);
  const [certificate, setCertificate] = useState(false);
  const Navigate = useNavigate();
  const resultClickHandler = () => {
    setSelectSemester(true);
    setCertificate(false);
  };
  const certificateClickHandler = () => {
    setCertificate(true);
    setSelectSemester(false);
  };
  const homeClickHandler = () => {
    Navigate("/");
  };
  const selectedClass = selectSemester ? "resultButtonActive" : "resultButton";
  const selectedClass1 = certificate ? "resultButtonActive" : "resultButton";
  const semesterSelectionSidebar = (
    <div className={classes.studenthomepagesidebar}>
      <div className={classes.sidebartext}>
        <p>View result</p>
      </div>
      <div className={classes.spacebetween}></div>
      <div>Results</div>
    </div>
  );
  const certificateSidebar = (
    <div className={classes.studenthomepagesidebar}>
      <div className={classes.sidebartext}>
        <p>View Certificate</p>
      </div>
      <div className={classes.spacebetween}></div>
      <div>Certificate is shown below</div>
    </div>
  );
  const certificateMenu = (
    <div className={classes.semesterselectorbody}>
      <div className={classes.semesterselecttext}>
        <p>View Graduation Certificate </p>
      </div>
      <div className={classes.selectorbutton}>
        <button>View</button>
      </div>
    </div>
  );
  const semesterSelection = (
    <div className={classes.semesterselectorbody}>
      <div className={classes.semesterselecttext}>
        <p>Select Semester </p>
      </div>
      <div className={classes.semesterselector}>
        <select name="" id="">
          <option value="">S1</option>
          <option value="">S2</option>
          <option value="">S3</option>
          <option value="">S4</option>
          <option value="">S5</option>
        </select>
      </div>
      <div className={classes.selectorbutton}>
        <button>View</button>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <div className={classes.studenthomepagebody}>
        {selectSemester && semesterSelectionSidebar}
        {selectSemester && semesterSelection}
        {certificate && certificateSidebar}
        {certificate && certificateMenu}
        <div className={classes.navbar}>
          <div className={classes.navbarbutton}>
            <button className={classes.homeButton} onClick={homeClickHandler}>
              Home
            </button>
          </div>
          <div className={classes.navbarbutton}>
            <button className={selectedClass} onClick={resultClickHandler}>
              Results
            </button>
          </div>
          <div className={classes.navbarbutton}>
            <button
              className={selectedClass1}
              onClick={certificateClickHandler}
            >
              Certificate
            </button>
          </div>
        </div>
        <div className={classes.navbarlogobutton}>
          <button className={classes.dropbtn}>
            <img src={logo} alt="" />
          </button>

          <div className={classes.dropdowncontent}>
            <div className={classes.btnimage}>
              <button>Profile</button>
            </div>
            <div className={classes.btnimage}>
              <button>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default StudentHomepageBody;
