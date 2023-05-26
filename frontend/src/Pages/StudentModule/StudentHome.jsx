import classes from "./css/StudentHomepageBody.module.css";
import React from "react";
import "./css/styles.css";

const StudentHome = () => {
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
          <table className={classes.studentdetailstable2}>
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
    </React.Fragment>
  );
};
export default StudentHome;
