import classes from "./css/StudentHomepageBody.module.css";
import logo from "../../assets/logo/school.png";
import React, { useState } from "react";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";
const StudentHomepageBody = () => {
  //This states for top Navbar
  const [selectSemester, setSelectSemester] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [profile, setProfile] = useState(true);

  //This states for sideNavbar
  const [viewResult,setViewResult] = useState(true);
  const [pendingResult,setPendingResult] = useState(false);
  const [reports,setReports] = useState(false);


  const Navigate = useNavigate();
  const resultClickHandler = () => {
    setSelectSemester(true);
    setCertificate(false);
    setProfile(false);
  };
  const certificateClickHandler = () => {
    setCertificate(true);
    setSelectSemester(false);
    setProfile(false);
  };
  const profileClickHandler = () => {
    setCertificate(false);
    setSelectSemester(false);
    setProfile(true);
  };

  const viewResultButtonHandler=()=>{
    setViewResult(true);
    setPendingResult(false);
    setReports(false);
  }
  const pendingResultButtonHandler = ()=>{
    setViewResult(false);
    setPendingResult(true);
    setReports(false);
  }
  const reportsButtonHandler = ()=>{
    setViewResult(false);
    setPendingResult(false);
    setReports(true);
  }

  const homeClickHandler = () => {
    Navigate("/");
  };

  //This logic is button styles for top Navbar
  const selectedClass = selectSemester ? "resultButtonActive" : "resultButton";
  const selectedClass1 = certificate ? "resultButtonActive" : "resultButton";
  const selectedClass2 = profile ? "resultButtonActive" : "resultButton";

  //This logic for Results sidebar buttons
  const viewResultButton = viewResult ? 'selectedSidebarButton' : 'notSelectedSidebarButton';
  const pendingResultButton = pendingResult ? 'selectedSidebarButton' : 'notSelectedSidebarButton';
  const reportsButton = reports ? 'selectedSidebarButton' : 'notSelectedSidebarButton';

  const profileView = (
    <div className={classes.studenthomepagesidebar}>
      <div className={classes.sidebartext}>
        <button className="selectedSidebarButton">View Profile</button>
      </div>
      <div className={classes.spacebetween}></div>
    </div>
  );
  const studentInfo = <div className={classes.semesterselectorbody}>
  <div className={classes.semesterselecttext}>
    <p>Student Details </p>
  </div>
  <div className={classes.mainstudentDetailsTable}>
    <table className={classes.studentdetailstable1}>
      <tr>
        <td>Gender</td>
        <td>Male</td>
      </tr>
      <tr>
        <td>Date of Birth</td>
        <td>28-10-2002</td>
      </tr>
      <tr>
        <td>Aadhar Number</td>
        <td>2105520178924</td>
      </tr>
      <tr>
        <td>Mother Toungue</td>
        <td>Malayalam</td>
      </tr>
      <tr>
        <td>Catagory</td>
        <td>General</td>
      </tr>
    </table>
    <table className={classes.studentdetailstable1}>
      <tr>
        <td>Religion</td>
        <td>Hindu</td>
      </tr>
      <tr>
        <td>Nationality</td>
        <td>India</td>
      </tr>
      <tr>
        <td>Additional Information</td>
      </tr>
      <tr>
        <td>Blood Group</td>
        <td>O+ve</td>
      </tr>
    </table>
  </div>

  <div className={classes.setHeight}></div>
</div>
  const semesterSelectionSidebar = (
    <div className={classes.studenthomepagesidebar}>
      <div className={classes.sidebartext}>
        <button onClick={viewResultButtonHandler} className={viewResultButton}>View Result</button>
      </div>
      <div className={classes.spacebetween}></div>
      <div className={classes.sidebartext}>
        <button onClick={pendingResultButtonHandler} className={pendingResultButton}>Pending Results</button>
      </div>
      <div className={classes.spacebetween}></div>
      <div className={classes.sidebartext}>
        <button onClick={reportsButtonHandler} className={reportsButton}>Reports</button>
      </div>
      <div className={classes.spacebetween}></div>
      <div className={classes.setSidebarHeight}></div>
    </div>
  );
  const certificateSidebar = (
    <div className={classes.studenthomepagesidebar}>
      <div className={classes.sidebartext}>
        <button className="selectedSidebarButton">View Certificate</button>
      </div>
      <div className={classes.spacebetween}></div>
    </div>
  );
  const certificateMenu = (
    <div className={classes.certificateselectorbody}>
      <div className={classes.certificateselecttext}>
        <p>View Graduation Certificate </p>
      </div>
      <div className={classes.certificatebutton1}>
        <button className={classes.certificatebutton}>View</button>
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
      <div className={classes.setHeight}></div>
    </div>
  );
  return (
    <React.Fragment>
      <div className={classes.studenthomepagebody}>
        {profile && profileView}
        {profile && studentInfo}
        {selectSemester && semesterSelectionSidebar}
        {selectSemester && viewResult && semesterSelection}
        {certificate && certificateSidebar}
        {certificate && certificateMenu}
        <div className={classes.navbar}>
          <button onClick={profileClickHandler} className={selectedClass2}>
            Home
          </button>

          <button className={selectedClass} onClick={resultClickHandler}>
            Results
          </button>

          <button className={selectedClass1} onClick={certificateClickHandler}>
            Certificate
          </button>

          <p className="welcomeName">Welcome Krishnaprasad</p>
          <div className={classes.logo}>
            <button className={classes.dropbtn}>
              <img src={logo} alt="" />
            </button>

            <div className={classes.dropdowncontent}>
              <div className={classes.btnimage}>
                <button onClick={homeClickHandler}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default StudentHomepageBody;
