import classes from "./css/StudentHomepageBody.module.css";
import React from "react";
import "./css/styles.css";
import { useSelector } from "react-redux";

const StudentHome = () => {
  const { user } = useSelector((state) => state.auth);

  function extractYear(string) {
    // Get the 4th and 5th characters of the string.
    var year = string.substring(3, 5);
    // Append 20 to the year.
    year = "20" + year;
    // Return the year.
    return year;
  }

  const year = extractYear(user.registration_no);

  return (
    <React.Fragment>
      <div className={classes.studenthomepagesidebar}>
        <div className={classes.sidebartext}>
          <button className="selectedSidebarButton">View Profile</button>
        </div>
        <div className={classes.spacebetween}></div>
      </div>
      <div className={classes.semesterselectorbody}>
        <p className="studentdetails">Student Details </p>

        <div className={classes.mainstudentDetailsTable}>
          <table className={classes.studentdetailstable1}>
            <tbody>
              <tr className="tablerow">
                <td className="tablecolumn">Name : {user.name}</td>
                <td className="tablecolumn">Register Number : {user.registration_no}</td>
              </tr>
              <tr  className="tablerow">
                <td className="tablecolumn">Institution : {user.institution}</td>
                <td className="tablecolumn">Program: {user.program}</td>
              </tr>
              <tr  className="tablerow">
                <td className="tablecolumn">Branch: {user.branch}</td>
                <td className="tablecolumn">Mode of study:Regular</td>
              </tr>
              <tr  className="tablerow">
                <td className="tablecolumn">Year of Admission: {year}</td>
                <td className="tablecolumn">Duration of the programme : 4 Years</td>
              </tr>
              <tr className="tablerow">
                <td className="tablecolumn">Month and Year of Passing : JUNE-2022</td>
                <td className="tablecolumn">Medium of Instruction: English</td>
              </tr>
              <tr className="tablerow">
                <td className="tablecolumn">Total Credits :190</td>
                <td className="tablecolumn">CGPA :8.61</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={classes.setHeight}></div>
      </div>
    </React.Fragment>
  );
};
export default StudentHome;
