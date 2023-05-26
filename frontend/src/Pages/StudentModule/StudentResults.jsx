import React from "react";
import { useState } from "react";
import "./css/styles.css";
import classes from "./css/StudentHomepageBody.module.css";
const StudentResults = ()=>{

    const [viewResult,setViewResult] = useState(true);
    const [pendingResult,setPendingResult] = useState(false);
    const [reports,setReports] = useState(false);
  

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

    const viewResultButton = viewResult ? 'selectedSidebarButton' : 'notSelectedSidebarButton';
    const pendingResultButton = pendingResult ? 'selectedSidebarButton' : 'notSelectedSidebarButton';
    const reportsButton = reports ? 'selectedSidebarButton' : 'notSelectedSidebarButton';
  

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
    return(
    <React.Fragment>
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
    {viewResult && semesterSelection}
    </React.Fragment>);
}
export default StudentResults;