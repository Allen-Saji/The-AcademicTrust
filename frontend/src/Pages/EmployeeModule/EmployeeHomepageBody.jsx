import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/school.png";
import classes from "./css/EmployeeHomepageBody.module.css";
import { logout, register } from "../../features/auth/authSlice";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner";
import axios from "axios";
import Certificate from "../../Components/Certificate";

const EmployeeHomepageBody = () => {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false); // New state for loading status
  const [home, setHome] = useState(true);
  const [Credentials, setCredentials] = useState(false);
  const [viewCertificate, setCertificate] = useState(false);
  const [height, setHeight] = useState(false);
  const [logoutButton, setLogoutButton] = useState(false);
  const [certificateData, setCertificateData] = useState({});
  const [error, setError] = useState(null); // New state for error handling
  const [cgpa, setCgpa] = useState([]);

  const Navigate = useNavigate();

  const [regNo, setRegNo] = useState();
  const API_URL1 = "http://localhost:5000/api/student/viewCertificate";
  const API_URL2 = "http://localhost:5000/api/student/getCgpa";
  const verifyCertificate = async (data) => {
    try {
      const cgpaEachSem = await axios.post(API_URL2, {
        register_no: regNo.regNo,
      });
      if (cgpaEachSem.status === 200) {
        setCgpa(cgpaEachSem.data);
      }
      const response = await axios.post(API_URL1, data);
      if (response.status === 200) {
        console.log(response.data);
        setCertificateData(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Certificate not found!");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(certificateData).length > 0) {
      setLoading(false); // Set loading status to false when certificateData is received
    }
  }, [certificateData]);

  const onChange = (e) => {
    setRegNo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (loading) {
    return <Spinner />;
  }

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

  const verifyButtonHandler = () => {
    const data = { registerNumber: regNo.regNo };
    setLoading(true);
    verifyCertificate(data);
    setCertificate(true);
    setHeight(true);
    // setHome(true);
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
      <p className={classes.employertext}>Organization Details</p>
      <table className="hometable">
        <tr className="employertablerow">
          <td className="employertabledata">Organization Name</td>
          <td className="employertabledata">{user.name}</td>
        </tr>
        <tr className="employertablerow">
          <td className="employertabledata">Email</td>
          <td>{user.email}</td>
        </tr>
        <tr className="employertablerow">
          <td className="employertabledata">Headquarters</td>
          <td>{user.headquarters}</td>
        </tr>
        <tr className="employertablerow">
          <td className="employertabledata">Year Of Registration</td>
          <td>{user.year_of_reg}</td>
        </tr>
      </table>
    </div>
  );

  const sidebarheight = height
    ? "studenthomepagesidebarhigh"
    : "studenthomepagesidebarlow";
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
        <p>Enter the student register number </p>
      </div>
      <div className={classes.semesterselector}>
        <input type="text" name="regNo"  onChange={onChange} />
      </div>
      <div className={classes.selectorbutton}>
        <button onClick={verifyButtonHandler}>Verify</button>
      </div>
      {error && <p className={classes.error}>{error}</p>}{" "}
    </div>
  );
  const logoutButtonClickHandler = () => {
    setLogoutButton((val) => !val);
  };
  const logout = logoutButton ? "navbarlogobutton" : "dropdowncontent";
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
          <button
            onClick={logoutButtonClickHandler}
            className={classes.dropbtn}
          >
            <img src={logo} alt="" />
          </button>

          <div className={logout}>
            <button
              className="dropdowncontentbutton"
              onClick={employeeLogoutClickHandler}
            >
              Logout
            </button>
          </div>
        </div>
       
        {/* Render the error message */}
        {viewCertificate && !loading && !error && (
          <Certificate certificateData={certificateData} cgpa={cgpa} />
        )}
      </div>
    </React.Fragment>
  );
};
export default EmployeeHomepageBody;
