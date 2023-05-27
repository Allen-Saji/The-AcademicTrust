import React, { Fragment } from "react";
import { useState } from "react";
import "./css/styles.css";
import classes from "./css/UniversityHomepageBody.module.css";
const UniversityCourse = () => {
  const [addCourseButton, setAddCourseButton] = useState(true);
  const [updateCourseButton, setUpdateCourseButton] = useState(false);
  const [deleteCourseButton, setDeleteCourseButton] = useState(false);

  const addCourseButtonHandler = () => {
    setAddCourseButton(true);
    setUpdateCourseButton(false);
    setDeleteCourseButton(false);
  };
  const updateCourseButtonHandler = () => {
    setAddCourseButton(false);
    setUpdateCourseButton(true);
    setDeleteCourseButton(false);
  };
  const deleteCourseButtonHandler = () => {
    setAddCourseButton(false);
    setUpdateCourseButton(false);
    setDeleteCourseButton(true);
  };
  const addCourseStyle = addCourseButton ? "sidebarActive" : "sidebarNotActive";
  const updateCourseStyle = updateCourseButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const deleteCourseStyle = deleteCourseButton
    ? "sidebarActive"
    : "sidebarNotActive";
  return (
    <Fragment>
      <div className={classes.universityhomepagesidebar}>
        <div className={classes.sidebartext1}>
          <button className={addCourseStyle} onClick={addCourseButtonHandler}>
            Add Course
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
        <div className={classes.sidebartext1}>
          <button
            onClick={updateCourseButtonHandler}
            className={updateCourseStyle}
          >
            Update Course
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
        <div className={classes.sidebartext1}>
          <button
            className={deleteCourseStyle}
            onClick={deleteCourseButtonHandler}
          >
            Delete Course
          </button>
        </div>
        <div className={classes.spacebetween1}></div>
      </div>
    </Fragment>
  );
};
export default UniversityCourse;
