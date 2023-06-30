import React from "react";
import { Fragment } from "react";
import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addInstitution } from "../../features/institution/institutionSlice";
import searchbutton from "../../assets/searchbutton.png";
// import editpencil from "../../assets/editpencilbutton.png";
import saveTick from "../../assets/saveTick.png";
import cancelSymbol from "../../assets/cancelSaveButton.png";
import deletelogo from "../../assets/deleteButton.png";
import AllInstitutionData from "./AllInstituionData";
const UniversityAllInstitution = () => {
  const [closeSubmitOverlay, setCloseSubmitOverlay] = useState(false);

  const [allInstitutionButton, setallInstitutionButton] = useState(false);
  const [addInstitutionButton, setaddInstitutionButton] = useState(true);
  const [updateInstitutionButton, setupdateInstitutionButton] = useState(false);
  const [deleteInstitutionButton, setdeleteInstitutionButton] = useState(false);

  //State management for update institution 
  const[searchInstitutionButton,setSearchInstitutionButton] = useState(false);

  const[updateEachFormCancelButton,setUpdateEachFormCancelButton] = useState(false);
  const [updateInstitutionHtmlFlag, setUpdateInstitutionHtmlFlag] =
    useState(true);
  const [updateEachInstitutionButton, setUpdateEachInstitutionButton] =
    useState(false);
  const [saveUpdatedCollege, setSaveUpdatedCollege] = useState(false);

  // const allInstitutionButtonHandler = () => {
  //   setallInstitutionButton(true);
  //   setaddInstitutionButton(false);
  //   setupdateInstitutionButton(false);
  //   setdeleteInstitutionButton(false);
  //   updateInstitutionFormCancelButtonHandler();
  // };
  const addInstitutionButtonHandler = () => {
    setallInstitutionButton(false);
    setaddInstitutionButton(true);
    setupdateInstitutionButton(false);
    setdeleteInstitutionButton(false);
    updateInstitutionFormCancelButtonHandler();
    setUpdateInstitutionHtmlFlag(true);
    setSearchInstitutionButton(false);
    
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

  
  const updateInstitutionFormCancelButtonHandler = (event) => {
      // event.preventDefault();
    setUpdateInstitutionHtmlFlag(true);
    setUpdateEachInstitutionButton(false);
    setUpdateEachFormCancelButton(false);
  };
  const updateInstitutionFormSaveButtonHandler = () => {
    setUpdateInstitutionHtmlFlag(true);
    setUpdateEachInstitutionButton(false);
    setSaveUpdatedCollege(true);
    setCloseSubmitOverlay(true);
  };

  const updateInstitutionSaveChangesClickHandler = () => {
    setCloseSubmitOverlay(false);
  };

  const deleteEachInstitutionButtonHandler = () => {

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

  const [formData, setFormData] = useState({
    name: "",
    institution_code: "",
    address: "",
    phn_no: {},
    year_of_reg: {},
    email: "",
  });

  const { name, year_of_reg, phn_no, address, institution_code, email } =
    formData;
  const Dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const institutionData = {
      name,
      year_of_reg,
      phn_no,
      address,
      institution_code,
      email,
    };

    Dispatch(addInstitution(institutionData));
    toast.success(`Institution added successfully`);
  };

  // const allInstitutionNamesTable = (
  //   <div className="maintableforinstitution">
  //     <AllInstitutionData />
  //   </div>
  // );
  const addInstitutionHtml = (
    <div className="maintableforaddinstitution">
      <h3 className="addinstitutionheading">
        Add new institution to the university
      </h3>
      <form className="addinstitutionform" onSubmit={onSubmit}>
        <div className="formdivs">
          <label htmlFor="nameinput">Name:</label>
          <input
            name="name"
            className="institutionnameinput"
            id="nameinput"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="formdivs">
          <label htmlFor="">Address:</label>
          <input
            name="address"
            className="institutionaddressinput"
            onChange={onChange}
            type="text"
          />
        </div>
        <div className="formdivs">
          <label htmlFor="">Email:</label>
          <input
            name="email"
            className="institutionemailinput"
            type="email"
            onChange={onChange}
          />
        </div>
        <div className="formdivs">
          <label htmlFor="">Contact No:</label>
          <input
            name="phn_no"
            className="institutioncontactnoinput"
            type="number"
            onChange={onChange}
          />
        </div>
        <div className="formdivs">
          <label htmlFor="">College Code:</label>
          <input
            name="institution_code"
            className="institutioncollegeidinput1"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="formdivs">
          <label htmlFor="">Year of Reg:</label>
          <input
            name="year_of_reg"
            className="institutionyearofreginput"
            type="number"
            onChange={onChange}
          />
        </div>
        <button className="addinstitutionbutton" type="submit">
          Save
        </button>
      </form>
    </div>
  );

  const searchButton = ()=>{
    setSearchInstitutionButton(true);
    // setUpdateEachInstitutionButton(false);
    setUpdateInstitutionHtmlFlag(false);
  }

  const mainUpdateInstitution = (
    <div className="maininstitution">
      <div className="maininstitutionsearchinputbutton">
        <label className="allinstitutiontext">Search Institution</label>
        <input
          className="maininstitutionsearchinput"
          type="text"
          placeholder="search"
        
        />
        {/* Search button for update institution  */}
        <button onClick={searchButton} className="maininstitutionsearchbutton">
          <img className="searchbuttonimg" src={searchbutton} alt="" />
          
        </button>
      </div>
      {/* <div className="allinstitutiontext">
        <p>All Institutions</p>
      </div> */}
      {/* <div className="spacebetween"></div> */}
      {/* <div className="updatecollegemainbutton">
        <button
          onClick={updateEachInstitutionButtonHandler}
          className="updatecollegemainbuttonname"
        >
          Aimil Bij Joseph College of engineering
        </button>
        <button
          onClick={updateEachInstitutionButtonHandler}
          className="updatecollegemainbuttonsymbol"
        >
          <img className="editpencilbuttonimg" src={editpencil} alt="" />
        </button>
      </div> */}
    </div>
  );
  const updateInstitutionForm = (
    <div className="maintableforupdateinstitution">
      <h3 className="addinstitutionheading">
        Update institution to the university
      </h3>
      <form className="updateinstitutionform">
        <div className="formdivs">
          <label htmlFor="nameinput">Name:</label>
          <input className="institutionnameinput" id="nameinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">Address:</label>
          <input className="institutionaddressinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">Email:</label>
          <input className="institutionemailinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">Contact No:</label>
          <input className="institutioncontactnoinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">College Id:</label>
          <input className="institutioncollegeidinput" type="text" />
        </div>
        <div className="formdivs">
          <label htmlFor="">Year of Reg:</label>
          <input className="institutionyearofreginput" type="text" />
        </div>
        <button
          onClick={updateInstitutionFormSaveButtonHandler}
          className="addinstitutionbutton"
          type="submit"
        >
          Save
        </button>
        <button
          onClick={updateInstitutionFormCancelButtonHandler}
          className="addinstitutioncancelbutton"
          type="submit"
        >
          Cancel
        </button>
      </form>
    </div>
  );
  const saveChangesHtml = (
    
      <div className="savechangesmainwindow">
        <div className="savechangestext">
          <p>Save Changes ?</p>
        </div>
        <div>
          <button
            onClick={updateInstitutionSaveChangesClickHandler}
            className="savechangestickbutton"
          >
            <img className="savechangesticksymbol" src={saveTick} alt="" />
          </button>
          <button
            onClick={updateInstitutionSaveChangesClickHandler}
            className="savechangescancelbutton"
          >
            <img
              className="savechangescancelsymbol"
              src={cancelSymbol}
              alt=""
            />
          </button>
        </div>
      </div>
    
  );

  const mainUpdateDeleteInstitution = (
    <div className="maininstitutiondelete">
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
        <p>All Institutions</p>
      </div>
      <div className="spacebetween"></div>
      <div className="updatecollegemainbutton">
        <button
          onClick={deleteEachInstitutionButtonHandler}
          className="updatecollegemainbuttonname"
        >
          Aimil Bij Joseph College of engineering
        </button>
        <button
          onClick={deleteEachInstitutionButtonHandler}
          className="updatecollegemainbuttonsymbol"
        >
          <img className="editpencilbuttonimg" src={deletelogo} alt="" />
        </button>
      </div>
    </div>
  );
  return (
    <Fragment>
      <div className={classes.universityhomepagesidebar}>
        {/* <div className={classes.sidebartext1}>
          <button
            className={allInstitutionStyle}
            onClick={allInstitutionButtonHandler}
          >
            All Institution
          </button>
        </div>
        <div className={classes.spacebetween1}></div> */}
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
      {/* {allInstitutionButton && allInstitutionNamesTable} */}
      {addInstitutionButton && addInstitutionHtml}
      {updateInstitutionButton &&
        updateInstitutionHtmlFlag &&
        mainUpdateInstitution}
        {searchInstitutionButton && !updateEachFormCancelButton && updateInstitutionForm}
      {/* {updateEachInstitutionButton && updateInstitutionForm} */}
      {deleteInstitutionButton && mainUpdateDeleteInstitution}
      
    </Fragment>
  );
};
export default UniversityAllInstitution;
