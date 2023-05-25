import classes from "./css/UniversityHomepageBody.module.css";
import logo from "../../assets/logo/university.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/styles.css";
const UniversityHomepageBody = () => {
  const Navigate = useNavigate();
  //states for top navbar
  const [home,setHome] = useState(false);
  const [institution, setInstitution] = useState(true);
  const [course, setCourse] = useState(false);
  const [result, setResult] = useState(false);
  const [certificate, setCertificate] = useState(false);
  // states for institution sideNavbar styles
  const [allInstitutionButton,setallInstitutionButton] = useState(true);
  const [addInstitutionButton,setaddInstitutionButton] = useState(false);
  const [updateInstitutionButton,setupdateInstitutionButton] = useState(false);
  const [deleteInstitutionButton,setdeleteInstitutionButton] = useState(false);
  // states for course sidenavbar styles
  const [addCourseButton,setAddCourseButton] = useState(true);
  const [updateCourseButton,setUpdateCourseButton] = useState(false);
  const [deleteCourseButton,setDeleteCourseButton] = useState(false);
  //states for result sidebar styles
  const [publishResultButton,setPublishResultButton] = useState(true);
  const [updateResultButton,setUpdateRwsultButton] = useState(false);
  const [deleteResultButton,setDeleteResultButton] = useState(false);
  const logoutClickHandler = () => {
    Navigate("/");
  };
  //Handler for all top navbar
  const homeButtonHandler =()=>{
    setHome(true);
    setInstitution(false);
    setCourse(false);
    setResult(false);
    setCertificate(false);
  }
  const institutionClickHandler = () => {
    setInstitution(true);
    setCourse(false);
    setResult(false);
    setCertificate(false);
    setHome(false);
  };
  const courseClickHandler = () => {
    setCourse(true);
    setInstitution(false);
    setResult(false);
    setCertificate(false);
    setHome(false);

  };

  const resultClickHandler = () => {
    setResult(true);
    setCertificate(false);
    setInstitution(false);
    setCourse(false);
    setHome(false);

  };
  const certificateClickHandler = () => {
    setCertificate(true);
    setInstitution(false);
    setCourse(false);
    setResult(false);
    setHome(false);

  };
  //all button handler for Institution Sidebar buttons
  const allInstitutionButtonHandler =()=>{
    setallInstitutionButton(true);
    setaddInstitutionButton(false);
    setupdateInstitutionButton(false);
    setdeleteInstitutionButton(false);
  }
  const addInstitutionButtonHandler =()=>{
    setallInstitutionButton(false);
    setaddInstitutionButton(true);
    setupdateInstitutionButton(false);
    setdeleteInstitutionButton(false);
  }
  const updateInstitutionButtonHandler =()=>{
    setallInstitutionButton(false);
    setaddInstitutionButton(false);
    setupdateInstitutionButton(true);
    setdeleteInstitutionButton(false);
  }
  const deleteInstitutionButtonHandler =()=>{
    setallInstitutionButton(false);
    setaddInstitutionButton(false);
    setupdateInstitutionButton(false);
    setdeleteInstitutionButton(true);
  }
  //handler for all course side navbar
  const addCourseButtonHandler =()=>{
    setAddCourseButton(true);
    setUpdateCourseButton(false);
    setDeleteCourseButton(false);
  }
  const updateCourseButtonHandler =()=>{
    setAddCourseButton(false);
    setUpdateCourseButton(true);
    setDeleteCourseButton(false);
  }
  const deleteCourseButtonHandler =()=>{
    setAddCourseButton(false);
    setUpdateCourseButton(false);
    setDeleteCourseButton(true);
  }
  //handler for all Result side Navbar
  const publishResultButtonHandler =()=>{
    setPublishResultButton(true);
    setUpdateRwsultButton(false);
    setDeleteResultButton(false);
  }
  const updateResultButtonHandler =()=>{
    setPublishResultButton(false);
    setUpdateRwsultButton(true);
    setDeleteResultButton(false);
  }
  const deleteResultButtonHandler =()=>{
    setPublishResultButton(false);
    setUpdateRwsultButton(false);
    setDeleteResultButton(true);
  }
  // Dynamic style for Institution Sidebar buttons
  const allInstitutionStyle = allInstitutionButton ? 'sidebarActive' : 'sidebarNotActive';
  const addInstitutionStyle = addInstitutionButton ? 'sidebarActive' : 'sidebarNotActive';
  const updateInstitutionStyle = updateInstitutionButton ? 'sidebarActive' : 'sidebarNotActive';
  const deleteInstitutionStyle = deleteInstitutionButton ? 'sidebarActive' : 'sidebarNotActive';


  // Dynamic Styles for Top Navbar
  const homeStyle = home ? "resultButtonActive" : "resultButton";
  const institutionStyle = institution ? "resultButtonActive" : "resultButton";
  const courseStyle = course ? "resultButtonActive" : "resultButton";
  const resultStyle = result ? "resultButtonActive" : "resultButton";
  const certificateStyle = certificate ? "resultButtonActive" : "resultButton";

  //Dynamic Styles for course sidebar buttons
  const addCourseStyle = addCourseButton ? 'sidebarActive' : 'sidebarNotActive';
  const updateCourseStyle = updateCourseButton ? 'sidebarActive' : 'sidebarNotActive';
  const deleteCourseStyle = deleteCourseButton ? 'sidebarActive' : 'sidebarNotActive';
  //Dynamic Styles for Result sidebar buttons
  const publishResultStyle = publishResultButton ? 'sidebarActive' : 'sidebarNotActive';
  const updateResultStyle = updateResultButton ? 'sidebarActive' : 'sidebarNotActive';
  const deleteResultStyle = deleteResultButton ? 'sidebarActive' : 'sidebarNotActive';

  const homeSidebar = <div className={classes.universityhomepagesidebar}>
  <div className={classes.sidebartext1}>
    <button className='sidebarActive'>Profile</button>
  </div>
  <div className={classes.spacebetween1}></div>
</div>

  const institutioncontent = (
    <div className={classes.universityhomepagesidebar}>
      <div className={classes.sidebartext1}>
        <button className={allInstitutionStyle} onClick={allInstitutionButtonHandler}>All Institution</button>
      </div>
      <div className={classes.spacebetween1}></div>
      <div className={classes.sidebartext1}>
        <button className={addInstitutionStyle} onClick={addInstitutionButtonHandler}>Add Institution</button>
      </div>
      <div className={classes.spacebetween1}></div>
      <div className={classes.sidebartext1}>
        <button onClick={updateInstitutionButtonHandler} className={updateInstitutionStyle}>
          Update Institution
        </button>
      </div>
      <div className={classes.spacebetween1}></div>
      <div className={classes.sidebartext1}>
        <button className={deleteInstitutionStyle} onClick={deleteInstitutionButtonHandler}>Delete Institution</button>
      </div>
      <div className={classes.spacebetween1}></div>
    </div>
  );
    const allInstitutionTable = <div className="maintableforinstitution">
    <table className='institutiontable'>
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
  </div>;
  const coursecontent = (
    <div className={classes.universityhomepagesidebar}>
      <div className={classes.sidebartext1}>
        <button className={addCourseStyle} onClick={addCourseButtonHandler}>Add Course</button>
      </div>
      <div className={classes.spacebetween1}></div>
      <div className={classes.sidebartext1}>
        <button onClick={updateCourseButtonHandler} className={updateCourseStyle}>Update Course</button>
      </div>
      <div className={classes.spacebetween1}></div>
      <div className={classes.sidebartext1}>
        <button className={deleteCourseStyle} onClick={deleteCourseButtonHandler}>Delete Course</button>
      </div>
      <div className={classes.spacebetween1}></div>
    </div>
  );
  const resultcontent = (
    <div className={classes.universityhomepagesidebar}>
      <div className={classes.sidebartext1}>
        <button onClick={publishResultButtonHandler} className={publishResultStyle}>Publish Result</button>
      </div>
      <div className={classes.spacebetween1}></div>
      <div className={classes.sidebartext1}>
        <button onClick={updateResultButtonHandler} className={updateResultStyle}>Update Result</button>
      </div>
      <div className={classes.spacebetween1}></div>
      <div className={classes.sidebartext1}>
        <button onClick={deleteResultButtonHandler} className={deleteResultStyle}>Delete Result</button>
      </div>
      <div className={classes.spacebetween1}></div>
    </div>
  );
  const certificatecontent = (
    <div className={classes.universityhomepagesidebar}>
      <div className={classes.sidebartext1}>
        <button>Generate Certificate</button>
      </div>
      <div className={classes.spacebetween1}></div>
    </div>
  );
  const generatemenu = (
    <div className={classes.generatemenu}>
      <button>Generate</button>
      <button>Deploy</button>
      <p>Generated successfully!!</p>
    </div>
  );
  return (
    <React.Fragment>
      <div className={classes.universityhomepagebody}>
        {home && homeSidebar}
        <div className="maintableforhome">
    <table className='institutiontable'>
      <tr>
        <th>Admin Informations</th>
      </tr>
      <tr>
        <td>Name</td>
        <td>Aimil</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>Aimu999</td>
      </tr>
      
    </table>
  </div>
        {institution && institutioncontent}
        {institution && allInstitutionButton && allInstitutionTable}
        {course && coursecontent}
        {result && resultcontent}
        {certificate && certificatecontent}
        <div className={classes.navbar}>
          <button onClick={homeButtonHandler} className={homeStyle}>Home</button>

          <button
            className={institutionStyle}
            onClick={institutionClickHandler}
          >
            Institution
          </button>

          <button className={courseStyle} onClick={courseClickHandler}>
            Course
          </button>

          <button className={resultStyle} onClick={resultClickHandler}>
            Result
          </button>

          <button
            className={certificateStyle}
            onClick={certificateClickHandler}
          >
            Certificate
          </button>

          <div className={classes.dropdown}>
          <button className={classes.dropbtn}>
              <img src={logo} alt="" />
            </button>
            <div className={classes.dropdowncontent}>
            <button onClick={logoutClickHandler}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      {certificate && generatemenu}
    </React.Fragment>
  );
};
export default UniversityHomepageBody;
