import React, { Fragment } from "react";
import { useState } from "react";
import "./css/styles.css";
import classes from "./css/UniversityHomepageBody.module.css";
import searchbutton from "../../assets/searchbutton.png";
import editpencil from '../../assets/editpencilbutton.png';
import saveTick from '../../assets/saveTick.png';
import cancelSymbol from '../../assets/cancelSaveButton.png';
import Modal from "../../UI/Modal";
import deletelogo from "../../assets/deleteButton.png";
const UniversityCourse = () => {
  const [addCourseButton, setAddCourseButton] = useState(true);
  const [updateCourseButton, setUpdateCourseButton] = useState(false);
  const [deleteCourseButton, setDeleteCourseButton] = useState(false);

  const [updateEachCourses, setUpdateEchCourses] = useState(false);
  const [updateEachCoursesFlag,setUpdateEachCoursesFlag] = useState(true);
  const [updateEachCoursesConfirmBoxFlag,setUpdateEachCoursesConfirmBoxFlag] = useState(false);
  const [updateDeleteCoursesConfirmBoxFlag,setDeleteEachCoursesConfirmBoxFlag] = useState(false);

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

  const addCoursesFormSaveButtonHandler = () => {};
  const addCoursesFormCancelButtonHandler = () => {};
  const updateEachInstitutionButtonHandler = () => {
    setUpdateEchCourses(true);
    setUpdateEachCoursesFlag(false);
  };
  const cancelEachCoursesButtonHandler =()=>{
    setUpdateEchCourses(false);
    setUpdateEachCoursesFlag(true);
  }
  const saveEachCoursesButtonHandler = ()=>{
    setUpdateEachCoursesFlag(true);
    setUpdateEchCourses(false);
    setUpdateEachCoursesConfirmBoxFlag(true);
  }

  const updateCoursesConfirmBoxTickClickHandler = ()=>{
    setUpdateEachCoursesFlag(true);
    setUpdateEchCourses(false);
    setUpdateEachCoursesConfirmBoxFlag(false);

  }
  const updateCoursesConfirmBoxCancelClickHandler=()=>{
    setUpdateEachCoursesConfirmBoxFlag(false);
  }
  const deleteEachCoursesButtonHandler =()=>{
    setDeleteEachCoursesConfirmBoxFlag(true);
  };

  const deleteCoursesConfirmBoxTickClickHandler =()=>{
    setDeleteEachCoursesConfirmBoxFlag(false);

  };
  const deleteCoursesConfirmBoxCancelClickHandler=()=>{
    setDeleteEachCoursesConfirmBoxFlag(false);
  }

  const addCourseStyle = addCourseButton ? "sidebarActive" : "sidebarNotActive";
  const updateCourseStyle = updateCourseButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const deleteCourseStyle = deleteCourseButton
    ? "sidebarActive"
    : "sidebarNotActive";

  const addCourseMainWindow = (
    <div className="addCoursesMainLogin">
      <div className="addCoursesText">
        <h3>Add new Courses</h3>
      </div>
      <form className="updateinstitutionform">
        <div className="formdivs">
          <label htmlFor="nameinput">Name:</label>
          <input className="coursenameinput" id="nameinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">Course Id:</label>
          <input className="courseidinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">Credits:</label>
          <input className="creditcourseinput" type="text" />
        </div>
        <button
          onClick={addCoursesFormSaveButtonHandler}
          className="addinstitutionbutton"
          type="submit"
        >
          Save
        </button>
        <button
          onClick={addCoursesFormCancelButtonHandler}
          className="addinstitutioncancelbutton"
          type="submit"
        >
          Cancel
        </button>
      </form>
    </div>
  );
  const updateCoursesWindow = (
    <div className="maincourses">
      <div className="maininstitutionsearchinputbutton">
        <input
          className="maininstitutionsearchinput"
          type="text"
          placeholder="search"
        />
        <button className="maininstitutionsearchbutton">
          <img className="searchbuttonimg" src={searchbutton} alt="" />
        </button>
      </div>
      <div className="allinstitutiontext">
        <p>All Courses</p>
      </div>
      <div className="spacebetween"></div>
      <div className="updatecollegemainbutton">
        <button
          onClick={updateEachInstitutionButtonHandler}
          className="updatecollegemainbuttonname"
        >
          Data Structures
        </button>
        <button
          onClick={updateEachInstitutionButtonHandler}
          className="updatecollegemainbuttonsymbol"
        >
          <img className="editpencilbuttonimg" src={editpencil} alt="" />
        </button>
      </div>
    </div>
  );

  const updateEachCoursesWindow = (
    <div className="addCoursesMainLogin">
      <h3 className="addCoursesText">Update Courses to the university</h3>
      <form className="updateinstitutionform">
        <div className="formdivs">
          <label htmlFor="nameinput">Name:</label>
          <input className="coursenameinput" id="nameinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">Course Id:</label>
          <input className="courseidinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">Credits:</label>
          <input className="creditcourseinput" type="text" />
        </div>

        <button onClick={saveEachCoursesButtonHandler} className="addinstitutionbutton" type="submit">
          Save
        </button>
        <button onClick={cancelEachCoursesButtonHandler} className="addinstitutioncancelbutton" type="submit">
          Cancel
        </button>
      </form>
    </div>
  );
  const updateEachCoursesConfirmBox = (<Modal>
    <div className="savechangesmainwindow">
      <div className="savechangestext"><p>Save Changes ?</p></div>
      <div>
        <button onClick={updateCoursesConfirmBoxTickClickHandler} className="savechangestickbutton"><img className="savechangesticksymbol" src={saveTick} alt="" /></button>
        <button onClick={updateCoursesConfirmBoxCancelClickHandler} className="savechangescancelbutton"><img className="savechangescancelsymbol" src={cancelSymbol} alt="" /></button>
      </div>
    </div>
    </Modal>);

const deleteEachCourseWindow = (
  <div className="maincourses">
    <div className="maininstitutionsearchinputbutton">
      <input
        className="maininstitutionsearchinput"
        type="text"
        placeholder="search"
      />
      <button className="maininstitutionsearchbutton">
        <img className="searchbuttonimg" src={searchbutton} alt="" />
      </button>
    </div>
    <div className="allinstitutiontext">
      <p>All Courses</p>
    </div>
    <div className="spacebetween"></div>
    <div className="updatecollegemainbutton">
      <button
        onClick={deleteEachCoursesButtonHandler}
        className="updatecollegemainbuttonname"
      >
        Data Structures
      </button>
      <button
        onClick={deleteEachCoursesButtonHandler}
        className="updatecollegemainbuttonsymbol"
      >
        <img className="editpencilbuttonimg" src={deletelogo} alt="" />
      </button>
    </div>
  </div>
);
const deleteEachCoursesConfirmBoxWindow = (<Modal>
  <div className="savechangesmainwindow">
    <div className="savechangestext"><p>Save Changes ?</p></div>
    <div>
      <button onClick={deleteCoursesConfirmBoxTickClickHandler} className="savechangestickbutton"><img className="savechangesticksymbol" src={saveTick} alt="" /></button>
      <button onClick={deleteCoursesConfirmBoxCancelClickHandler} className="savechangescancelbutton"><img className="savechangescancelsymbol" src={cancelSymbol} alt="" /></button>
    </div>
  </div>
  </Modal>);

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
        {addCourseButton && addCourseMainWindow}
        {updateCourseButton && updateEachCoursesFlag && updateCoursesWindow}
        {updateEachCourses && updateEachCoursesWindow}
        {updateEachCoursesConfirmBoxFlag && updateEachCoursesConfirmBox}
        {deleteCourseButton && deleteEachCourseWindow}
        {updateDeleteCoursesConfirmBoxFlag && deleteEachCoursesConfirmBoxWindow}
      </div>
    </Fragment>
  );
};
export default UniversityCourse;
