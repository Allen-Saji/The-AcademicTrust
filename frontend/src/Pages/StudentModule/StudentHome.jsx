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
              <td>Name :PARVATHY T.B</td>
              <td>Register Number :SJC18C202</td>
            </tr>
            <tr>
              <td>Institution :ST JOSEPHS COLLEGE OF ENGINEERING AND TECHNOLOGY PALAI</td>
              
            </tr>
            <tr>
            <td>Branch: Computer Science and Engineering</td>
              <td>Mode of study:Regular</td>
            </tr>
            <tr>
              <td>Year of Admission: 2018</td>
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
          </table>
          
        </div>

        <div className={classes.setHeight}></div>
      </div>
    </React.Fragment>
  );
};
export default StudentHome;
