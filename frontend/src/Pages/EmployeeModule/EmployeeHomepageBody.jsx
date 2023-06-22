import React, { useState } from "react";
import logo from "../../assets/logo/school.png";
import classes from "./css/EmployeeHomepageBody.module.css";
import { logout } from "../../features/auth/authSlice";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import EmpCertificate from "./EmpCertificate";

const EmployeeHomepageBody = () => {
  const [home, setHome] = useState(true);
  const [Credentials, setCredentials] = useState(false);
  const [viewCertificate,setCertificate] = useState(false);
  const [height,setHeight] = useState(false);
  const [logoutButton,setLogoutButton] = useState(false);

  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const employeeLogoutClickHandler = () => {
    // Dispatch(logout);
    Navigate("/");
    console.log("logout");
  };
  const homebuttonHandler = () => {
    setHome(true);
    setCredentials(false);
    setCertificate(false);
    setHeight(false);
  };
  const credentialbuttonHandler = () => {
    setCredentials(true);
    setHome(false);
  };

  const verifyButtonHandler =()=>{
    setCertificate(true);
    setHeight(true);
  };

  const homebutton = home ? "resultButtonActive" : "resultButton";
  const credentialbutton = Credentials ? "resultButtonActive" : "resultButton";
  const homeSidebar = (
    <div className={classes.studenthomepagesidebar}>
      <div className={classes.sidebartext}>
        <button>Profile</button>
      </div>
      <div className={classes.spacebetween}></div>
    </div>
  );
  const homeInfo = (
    <div className={classes.semesterselectorbody}>
      <p className={classes.employertext}>Employer Details</p>
      <table className="hometable">
        <tr className="employertablerow">
          <td className="employertabledata">Employer Name</td>
          <td className="employertabledata">Aimil Bij</td>
        </tr>
        <tr className="employertablerow">
          <td className="employertabledata">Company</td>
          <td>Aimu Tech</td>
        </tr>
        <tr className="employertablerow">
          <td className="employertabledata">Id</td>
          <td>123456789</td>
        </tr>
      </table>
    </div>
  );

  const sidebarheight = height ? 'studenthomepagesidebarhigh' : 'studenthomepagesidebarlow';
  const credentialInfoSidebar = (
    <div className={sidebarheight}>
      <div className={classes.sidebartext}>
        <button>Verify Credentials</button>
      </div>
      <div className={classes.spacebetween}></div>

    </div>
  );

  const credentialInfo = (
      <div className={classes.semesterselectorbody}>
      <div className={classes.semesterselecttext}>
        <p>Enter a public address </p>
      </div>
      <div className={classes.semesterselector}>
        <input type="text" />
      </div>
      <div className={classes.selectorbutton}>
        <button onClick={verifyButtonHandler}>Verify</button>
      </div>
    </div>
  );
  const logoutButtonClickHandler =()=>{
    setLogoutButton(val => !val);
  }
    const logout = logoutButton ? 'dropdowncontent' : 'navbarlogobutton';
  return (
    <React.Fragment>
      <div className={classes.studenthomepagebody}>
        {Credentials && credentialInfoSidebar}
        {Credentials && credentialInfo}
        {home && homeSidebar}
        {home && homeInfo}
        <div className={classes.navbar}>
          <div className={classes.navbarbutton}>
            <button className={homebutton} onClick={homebuttonHandler}>
              Home
            </button>
          </div>
          <div className={classes.navbarbutton}>
            <button
              onClick={credentialbuttonHandler}
              className={credentialbutton}
            >
              Credentials
            </button>
          </div>
        </div>
        <div className={classes.navbarlogobutton}>
          <button onClick={logoutButtonClickHandler} className={classes.dropbtn}>
            <img src={logo} alt="" />
          </button>

          <div className={logout}>
              <button className="dropdowncontentbutton" onClick={employeeLogoutClickHandler}>Logout</button>
          </div>
        </div>
        {viewCertificate && <EmpCertificate />}

      </div>
    </React.Fragment>
  );
};
export default EmployeeHomepageBody;
