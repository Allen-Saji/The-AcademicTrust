import React from "react";
import { Fragment } from "react";
import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
import { useState } from "react";

const UniversityAllInstitution = () => {
  const [allInstitutionButton, setallInstitutionButton] = useState(true);
  const [addInstitutionButton, setaddInstitutionButton] = useState(false);
  const [updateInstitutionButton, setupdateInstitutionButton] = useState(false);
  const [deleteInstitutionButton, setdeleteInstitutionButton] = useState(false);

  const allInstitutionButtonHandler = () => {
    setallInstitutionButton(true);
    setaddInstitutionButton(false);
    setupdateInstitutionButton(false);
    setdeleteInstitutionButton(false);
  };
  const addInstitutionButtonHandler = () => {
    setallInstitutionButton(false);
    setaddInstitutionButton(true);
    setupdateInstitutionButton(false);
    setdeleteInstitutionButton(false);
  };
  const updateInstitutionButtonHandler = () => {
    setallInstitutionButton(false);
    setaddInstitutionButton(false);
    setupdateInstitutionButton(true);
    setdeleteInstitutionButton(false);
  };
  const deleteInstitutionButtonHandler = () => {
    setallInstitutionButton(false);
    setaddInstitutionButton(false);
    setupdateInstitutionButton(false);
    setdeleteInstitutionButton(true);
  };

  const allInstitutionStyle = allInstitutionButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const addInstitutionStyle = addInstitutionButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const updateInstitutionStyle = updateInstitutionButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const deleteInstitutionStyle = deleteInstitutionButton
    ? "sidebarActive"
    : "sidebarNotActive";

  return (
    <Fragment>
      <div className={classes.universityhomepagesidebar}>
        <div className={classes.sidebartext1}>
          <button
            className={allInstitutionStyle}
            onClick={allInstitutionButtonHandler}
          >
            All Institution
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
        <div className={classes.sidebartext1}>
          <button
            className={addInstitutionStyle}
            onClick={addInstitutionButtonHandler}
          >
            Add Institution
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
        <div className={classes.sidebartext1}>
          <button
            onClick={updateInstitutionButtonHandler}
            className={updateInstitutionStyle}
          >
            Update Institution
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
        <div className={classes.sidebartext1}>
          <button
            className={deleteInstitutionStyle}
            onClick={deleteInstitutionButtonHandler}
          >
            Delete Institution
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
      </div>
      {allInstitutionButton && (
        <div className="maintableforinstitution">
          <table className="institutiontable">
            <tr>
              <th>All Institution</th>
              <th>Course Code</th>
            </tr>
            <tr>
              <td>St Josephs College</td>
              <td>SJC0001P</td>
            </tr>
            <tr>
              <td>Aimil Bij University</td>
              <td>Aimu999</td>
            </tr>
            <tr>
              <td>College of engineering TVM</td>
              <td>CET5542</td>
            </tr>
            <td>College of Kidangoor</td>
            <td>CEK78945</td>
          </table>
        </div>
      )}
    </Fragment>
  );
};
export default UniversityAllInstitution;
