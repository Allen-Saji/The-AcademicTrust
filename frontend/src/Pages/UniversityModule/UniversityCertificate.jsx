import React, { Fragment } from "react";
import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
const UniversityCertificate = () => {
  return (
    <Fragment>
      <div className={classes.universityhomepagesidebar}>
        <div className={classes.sidebartext1}>
          <button>Generate Certificate</button>
        </div>
        <div className={classes.spacebetween1}></div>
      </div>
    </Fragment>
  );
};
export default UniversityCertificate;
