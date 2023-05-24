import React, { useState } from "react";
import logo from "../../assets/logo/school.png";
import classes from "./css/EmployeeHomepageBody.module.css";
import './css/styles.css';
import { useNavigate } from "react-router-dom";
const EmployeeHomepageBody = () => {
  const [home,setHome] = useState(true);
  const [Credentials,setCredentials] = useState(false);
  const Navigate = useNavigate();
  const employeeLogoutClickHandler = () => {
    Navigate("/");
  };
  const homebuttonHandler = ()=>{
    setHome(true);
    setCredentials(false);
  }
  const credentialbuttonHandler = ()=>{
    setCredentials(true);
    setHome(false);
  }

  const homebutton = home ? 'resultButtonActive' : 'resultButton';
  const credentialbutton = Credentials ? 'resultButtonActive' : 'resultButton';
  const homeSidebar = <div className={classes.studenthomepagesidebar}>
  <div className={classes.sidebartext}>
    <button>Profile</button>
  </div>
  <div className={classes.spacebetween}></div>
</div>;
  const homeInfo = <div className={classes.semesterselectorbody}>
    <p>Employer Details</p>
    <table className={classes.hometable}>
      <tr>
        <td>Employer Name</td>
        <td>Aimil Bij</td>
      </tr>
      <tr>
        <td>Company</td>
        <td>Aimu Tech</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>123456789</td>
      </tr>

    </table>
</div>;

  const credentialInfoSidebar = <div className={classes.studenthomepagesidebar}>
  <div className={classes.sidebartext}>
    <button>Verify Credentials</button>
  </div>
  <div className={classes.spacebetween}></div>
</div>;

  const credentialInfo =  <div className={classes.semesterselectorbody}>
  <div className={classes.semesterselecttext}>
    <p>Enter a public address </p>
  </div>
  <div className={classes.semesterselector}>
    <input type="text" />
  </div>
  <div className={classes.selectorbutton}>
    <button>Verify</button>
  </div>
</div>;

  return (
    <React.Fragment>
      <div className={classes.studenthomepagebody}>
        {Credentials && credentialInfoSidebar}
        {Credentials && credentialInfo}
        {home && homeSidebar}
        {home && homeInfo}
        <div className={classes.navbar}>
          <div className={classes.navbarbutton}>
            <button
              className={homebutton}
              onClick={homebuttonHandler}
            >
              Home
            </button>
          </div>
          <div className={classes.navbarbutton}>
            <button onClick={credentialbuttonHandler} className={credentialbutton}>Credentials</button>
          </div>
        </div>
        <div className={classes.navbarlogobutton}>
          <button className={classes.dropbtn}>
            <img src={logo} alt="" />
          </button>

          <div className={classes.dropdowncontent}>
            <div className={classes.btnimage}>
              <button onClick={employeeLogoutClickHandler}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default EmployeeHomepageBody;
