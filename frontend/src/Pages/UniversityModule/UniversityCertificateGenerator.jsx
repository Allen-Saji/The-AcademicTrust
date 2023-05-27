import React, { Fragment } from "react";
import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
const UniversityCertificateGenerator = () => {
  return (
    <Fragment>
      <div className={classes.generatemenu}>
        <button>Generate</button>
        <button>Deploy</button>
        <p>Generated successfully!!</p>
      </div>
    </Fragment>
  );
};
export default UniversityCertificateGenerator;
