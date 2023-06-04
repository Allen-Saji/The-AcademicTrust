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
        <p className={classes.studentDetailstext}>Student Details </p>

        <div className={classes.mainstudentDetailsTable}>
          <table className={classes.studentdetailstable1}>
            <tbody>
              <tr>
                <td>Name : {user.name}</td>
                <td>Register Number : {user.registration_no}</td>
              </tr>
              <tr>
                <td>Institution : {user.institution}</td>
                <td>Program: {user.program}</td>
              </tr>
              <tr>
                <td>Branch: {user.branch}</td>
                <td>Mode of study:Regular</td>
              </tr>
              <tr>
                <td>Year of Admission: {year}</td>
                <td>Duration of the programme : 4 Years</td>
              </tr>
              <tr>
                <td>Month and Year of Passing : JUNE-2022</td>
                <td>Medium of Instruction: English</td>
              </tr>
              <tr>
                <td>Total Credits :190</td>
                <td>CGPA :8.61</td>
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
