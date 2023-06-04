import React from "react";
import { useState } from "react";
import "./css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarksAndGrades } from "../../features/result/resultSlice";
import classes from "./css/StudentHomepageBody.module.css";

const StudentResults = () => {
  const [viewResult, setViewResult] = useState(true);
  const [pendingResult, setPendingResult] = useState(false);
  const [reports, setReports] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const Dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { result } = useSelector((state) => state.result);

  const viewResultButtonHandler = () => {
    setViewResult(true);
    setPendingResult(false);
    setReports(false);
  };
  const pendingResultButtonHandler = () => {
    setViewResult(false);
    setPendingResult(true);
    setReports(false);
  };
  const reportsButtonHandler = () => {
    setViewResult(false);
    setPendingResult(false);
    setReports(true);
  };

  const viewResultButton = viewResult
    ? "selectedSidebarButton"
    : "notSelectedSidebarButton";
  const pendingResultButton = pendingResult
    ? "selectedSidebarButton"
    : "notSelectedSidebarButton";
  const reportsButton = reports
    ? "selectedSidebarButton"
    : "notSelectedSidebarButton";

  const student_id = user.registration_no;
  const handleViewResults = () => {
    const data = { student_id, semester: selectedSemester };
    Dispatch(fetchMarksAndGrades(data));
  };

  const semesterSelection = (
    <div className={classes.semesterselectorbody}>
      <div className={classes.semesterselecttext}>
        <p>Select Semester </p>
      </div>
      <div className={classes.semesterselector}>
        <select
          id="semesterSelect"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value={1}>S1</option>
          <option value={2}>S2</option>
          <option value={3}>S3</option>
          <option value={4}>S4</option>
          <option value={5}>S5</option>
          <option value={6}>S6</option>
          <option value={7}>S7</option>
          <option value={8}>S8</option>
        </select>
      </div>
      <div className={classes.selectorbutton}>
        <button onClick={handleViewResults}>View</button>
      </div>
      <div className={classes.setHeight}></div>
    </div>
  );
  return (
    <React.Fragment>
      <div className={classes.studenthomepagesidebar}>
        <div className={classes.sidebartext}>
          <button
            onClick={viewResultButtonHandler}
            className={viewResultButton}
          >
            View Result
          </button>
        </div>
        <div className={classes.spacebetween}></div>
        <div className={classes.sidebartext}>
          <button
            onClick={pendingResultButtonHandler}
            className={pendingResultButton}
          >
            Pending Results
          </button>
        </div>
        <div className={classes.spacebetween}></div>
        <div className={classes.sidebartext}>
          <button onClick={reportsButtonHandler} className={reportsButton}>
            Reports
          </button>
        </div>
        <div className={classes.spacebetween}></div>
        <div className={classes.setSidebarHeight}></div>
      </div>
      {viewResult && semesterSelection}
    </React.Fragment>
  );
};
export default StudentResults;
