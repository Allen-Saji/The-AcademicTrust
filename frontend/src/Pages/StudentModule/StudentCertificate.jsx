import React from "react";
import "./css/styles.css";
import classes from "./css/StudentHomepageBody.module.css";
const StudentCertificate = () => {
  return (
    <React.Fragment>
      <div className={classes.studenthomepagesidebar}>
        <div className={classes.sidebartext}>
          <button className="selectedSidebarButton">View Certificate</button>
        </div>
        <div className={classes.spacebetween}></div>
      </div>
      <div className={classes.certificateselectorbody}>
        <div className={classes.certificateselecttext}>
          <p>View Graduation Certificate </p>
        </div>
        <div className={classes.certificatebutton1}>
          <button className={classes.certificatebutton}>View</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default StudentCertificate;
