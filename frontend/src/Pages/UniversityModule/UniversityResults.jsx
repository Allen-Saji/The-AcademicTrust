import React, { Fragment, useState } from "react";
import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
const UniversityResults = () => {
  const [publishResultButton, setPublishResultButton] = useState(true);
  const [updateResultButton, setUpdateRwsultButton] = useState(false);
  const [deleteResultButton, setDeleteResultButton] = useState(false);

  const publishResultButtonHandler = () => {
    setPublishResultButton(true);
    setUpdateRwsultButton(false);
    setDeleteResultButton(false);
  };
  const updateResultButtonHandler = () => {
    setPublishResultButton(false);
    setUpdateRwsultButton(true);
    setDeleteResultButton(false);
  };
  const deleteResultButtonHandler = () => {
    setPublishResultButton(false);
    setUpdateRwsultButton(false);
    setDeleteResultButton(true);
  };

  const publishResultStyle = publishResultButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const updateResultStyle = updateResultButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const deleteResultStyle = deleteResultButton
    ? "sidebarActive"
    : "sidebarNotActive";

  const resultTab = (
    <div className="resultSelectorbody">
      <div className="latestresultheading">
        <p>Latest Result</p>
      </div>
      <div>
        <select className="resultselector">
          <option value="">B TECH S5(R,S) MARCH 2023</option>
          <option value="">B TECH S5(R,S) MARCH 2023</option>
        </select>
        <button className="publishbutton">Publish</button>
      </div>
    </div>
  );  

  return (
    <Fragment>
      <div className={classes.universityhomepagesidebar}>
        <div className={classes.sidebartext1}>
          <button
            onClick={publishResultButtonHandler}
            className={publishResultStyle}
          >
            Publish Result
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
        <div className={classes.sidebartext1}>
          <button
            onClick={updateResultButtonHandler}
            className={updateResultStyle}
          >
            Update Result
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
        {/* <div className={classes.sidebartext1}>
          <button
            onClick={deleteResultButtonHandler}
            className={deleteResultStyle}
          >
            Delete Result
          </button>
        </div> */}
        {/* <div className={classes.spacebetween1}></div> */}
      </div>
      {publishResultButton && resultTab}
    </Fragment>
  );
};
export default UniversityResults;
