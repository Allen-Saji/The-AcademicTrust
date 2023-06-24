import React, { useState } from "react";
import "./css/styles.css";
import classes from "./css/StudentHomepageBody.module.css";
import Certificate from "../../Components/Certificate";
const StudentCertificate = () => {
  const [certificate,setCertificate] = useState(false);
  const [height,setHeight] = useState(false);
  const viewButtonClickHandler =()=>{
    setCertificate(true);
    setHeight(true);
  }
  const sidebarheight = height ? 'studenthomepagesidebarhigh' : 'studenthomepagesidebarlow';

  return (
    <React.Fragment>
      <div className={sidebarheight}>
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
          <button onClick={viewButtonClickHandler} className={classes.certificatebutton}>View</button>
        </div>
      </div>
      {certificate && <Certificate />}
    </React.Fragment>
  );
};
export default StudentCertificate;
