import classes from './css/UniversityHomepageBody.module.css';
import logo from '../../assets/logo/university.png';
import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom';
import './css/styles.css';
const UniversityHomepageBody =()=>{
    const Navigate = useNavigate();
    const[institution,setInstitution] = useState(true);
    const[course,setCourse] = useState(false);
    const[result,setResult] = useState(false);
    const[certificate,setCertificate] = useState(false);


    const homeClickHandler = ()=>{
        Navigate('/');
    };

    const institutionClickHandler =()=>{
        setInstitution(true);
        setCourse(false);
        setResult(false);
        setCertificate(false);
    }
    const courseClickHandler =()=>{
        setCourse(true);
        setInstitution(false);
        setResult(false);
        setCertificate(false);
    }

    const resultClickHandler =()=>{
        setResult(true);
        setCertificate(false);
        setInstitution(false);
        setCourse(false);
    }
    const certificateClickHandler=()=>{
        
        setCertificate(true);
        setInstitution(false);
        setCourse(false);
        setResult(false);
    }
    const institutionStyle = institution ? 'resultButtonActive' :'resultButton';
    const courseStyle = course ? 'resultButtonActive' :'resultButton';
    const resultStyle = result ? 'resultButtonActive' :'resultButton';
    const certificateStyle = certificate ? 'resultButtonActive' :'resultButton';
    let institutioncontent = <div className={classes.universityhomepagesidebar}>
    <div className={classes.sidebartext1}>
      <button>Add Institution</button>
    </div>
    <div className={classes.spacebetween1}></div>
    <div className={classes.sidebartext1}>
      <button className={classes.sidebartextbutton}>Update Institution</button>
    </div>
    <div className={classes.spacebetween1}></div>
    <div className={classes.sidebartext1}>
      <button>Delete Institution</button>
    </div>
    <div className={classes.spacebetween1}></div>
  </div>;
    
    const coursecontent = <div className={classes.universityhomepagesidebar}>
    <div className={classes.sidebartext1}>
      <button>Add Course</button>
    </div>
    <div className={classes.spacebetween1}></div>
    <div className={classes.sidebartext1}>
      <button className={classes.sidebartextbutton}>Update Course</button>
    </div>
    <div className={classes.spacebetween1}></div>
    <div className={classes.sidebartext1}>
      <button>Delete Course</button>
    </div>
    <div className={classes.spacebetween1}></div>
  </div>;
  const resultcontent = <div className={classes.universityhomepagesidebar}>
  <div className={classes.sidebartext1}>
    <button>Publish Result</button>
  </div>
  <div className={classes.spacebetween1}></div>
  <div className={classes.sidebartext1}>
    <button className={classes.sidebartextbutton}>Update Result</button>
  </div>
  <div className={classes.spacebetween1}></div>
  <div className={classes.sidebartext1}>
    <button>Delete Result</button>
  </div>
  <div className={classes.spacebetween1}></div>
</div>;
const certificatecontent = <div className={classes.universityhomepagesidebar}>
<div className={classes.sidebartext1}>
  <button>Generate Certificate</button>
</div>
<div className={classes.spacebetween1}></div>
</div>;
const generatemenu = <div className={classes.generatemenu}>
<button>Generate</button>
<button>Deploy</button>
<p>Generated successfully!!</p>
</div>;
    return (
      <React.Fragment>
        <div className={classes.universityhomepagebody}>
          {institution && institutioncontent}
          {course && coursecontent}
          {result && resultcontent}
          {certificate && certificatecontent}
          <div className={classes.navbar}>
            <div className={classes.navbarbutton}>
              <button className={classes.homeButton} onClick={homeClickHandler}>Home</button>
            </div>
            <div className={classes.navbarbutton}>
              <button className={institutionStyle} onClick={institutionClickHandler}>Institution</button>
            </div>
            <div className={classes.navbarbutton}>
              <button className={courseStyle} onClick={courseClickHandler}>Course</button>
            </div>
            <div className={classes.navbarbutton}>
              <button className={resultStyle} onClick={resultClickHandler}>Result</button>
            </div>
            <div className={classes.navbarbutton}>
              <button className={certificateStyle} onClick={certificateClickHandler}>Certificate</button>
            </div>
          </div>
          <div className={classes.navbarlogobutton}>
            <button className={classes.dropbtn}>
              <img src={logo} alt="" />
            </button>
        
              <div className={classes.dropdowncontent}>
                <div className={classes.btnimage}>
                  <button>Profile</button>
                </div>
                <div className={classes.btnimage}>
                  <button>Logout</button>
                </div>
    
            </div>
          </div>
          
        </div>
        {certificate && generatemenu}
      </React.Fragment>
    );
}
export default UniversityHomepageBody;












