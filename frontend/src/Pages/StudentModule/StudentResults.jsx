import React, { useEffect } from "react";
import { useState } from "react";
import "./css/styles.css";
import { useSelector } from "react-redux";
import classes from "./css/StudentHomepageBody.module.css";
import axios from "axios";

const StudentResults = () => {
  const [viewResult, setViewResult] = useState(true);
  const [viewButton, setViewButton] = useState(false);
  const [viewFlag, , setViewFalg] = useState(true);

  const [reports, setReports] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(1);

  const { user } = useSelector((state) => state.auth);

  const viewResultButtonHandler = () => {
    setViewResult(true);
    setReports(false);
  };

  const reportsButtonHandler = () => {
    setViewResult(false);

    setReports(true);
  };

  const viewResultButton = viewResult
    ? "selectedSidebarButton"
    : "notSelectedSidebarButton";

  const reportsButton = reports
    ? "selectedSidebarButton"
    : "notSelectedSidebarButton";

  const student_id = user.registration_no;
  const token = user.token;

  const API_URL = "http://localhost:5000/api/student/result";

  const getMarksandGrades = async (data, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, data, config);
    if (response.status === 200) {
      //console.log(response.data.gradeAndMarks);
      return response.data.gradeAndMarks;
    } else {
      throw new Error(response.statusText);
    }
  };

  const [gradeAndMarks, setGradeAndMarks] = useState([]);

  // useEffect(() => {
  //   const data = { student_id, semester: 1 };
  //   const setResult = async () => {
  //     const result = await getMarksandGrades(data, token);
  //     setGradeAndMarks(result);
  //   };
  //   setResult();
  //   console.log(gradeAndMarks);
  // }, [Dispatch]);

  const handleViewResults = () => {
    const data = { student_id, semester: selectedSemester };
    const setResult = async () => {
      const result = await getMarksandGrades(data, token);
      setGradeAndMarks(result);

      setViewButton(true);
    };
    setResult();
    console.log(gradeAndMarks);
  };

  const onChangeSelectedSemester = (e) => {
    setSelectedSemester(e.target.value);
  };

  const semesterSelection = (
    <div className={classes.semesterselectorbody}>
      <div className={classes.semesterselecttext}>
        <p>Select Semester </p>
      </div>
      <div className={classes.semesterselector}>
        <select
          className={classes.selector}
          id="semesterSelect"
          value={selectedSemester}
          onChange={onChangeSelectedSemester}
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
  const resultTable = (
    <div className={classes.resultSelectorBody}>
      <table className="tableliine">
        <tbody>
          <tr className="tableheadinglines">
            <th className="tableheadinglinesubject">Subject</th>
            <th className="tableheadinglinegrade">Grade</th>
            <th className="tableheadinglinecredit">Credit</th>
          </tr>
          {/* S1 result table data */}
          {gradeAndMarks.map((data) => (
            <tr className="tableheadinglines">
              <td className="tabledata">{data.course_name}</td>
              <td className="tabledata">{data.grade}</td>
              <td className="tabledata">{data.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
<<<<<<< HEAD
=======

        <div className={classes.spacebetween}></div>
        <div className={classes.sidebartext}>
          <button onClick={reportsButtonHandler} className={reportsButton}>
            Reports
          </button>
        </div>
>>>>>>> 80a29753d9bc69cfa9f7418f90458d118f09332b
        <div className={classes.spacebetween}></div>
        <div className={classes.setSidebarHeight}></div>
      </div>
      {viewResult && semesterSelection}
      {viewButton && resultTable}
    </React.Fragment>
  );
};
export default StudentResults;
