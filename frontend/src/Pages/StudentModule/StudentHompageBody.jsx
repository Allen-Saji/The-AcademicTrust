import classes from "./css/StudentHomepageBody.module.css";
import logo from "../../assets/logo/school.png";
import React, { useEffect, useState } from "react";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import StudentHome from "./StudentHome";
import StudentResults from "./StudentResults";
import StudentCertificate from "./StudentCertificate";
const StudentHomepageBody = () => {
  //This states for top Navbar
  const [selectSemester, setSelectSemester] = useState(false);
  const [certificateNavbar, setCertificateNavbar] = useState(false);
  const [profile, setProfile] = useState(true);

  const Navigate = useNavigate();

  const resultClickHandler = () => {
    setSelectSemester(true);
    setCertificateNavbar(false);
    setProfile(false);
    Navigate("/student/result");
  };
  const certificateClickHandler = () => {
    setCertificateNavbar(true);
    setSelectSemester(false);
    setProfile(false);
    Navigate("/student/certificate");
  };
  const profileClickHandler = () => {
    setCertificateNavbar(false);
    setSelectSemester(false);
    setProfile(true);
    Navigate("/student/home");
  };

  const homeClickHandler = () => {
    Navigate("/");
  };

  //This logic is button styles for top Navbar
  const selectedClass = selectSemester ? "resultButtonActive" : "resultButton";
  const selectedClass1 = certificateNavbar
    ? "resultButtonActive"
    : "resultButton";
  const selectedClass2 = profile ? "resultButtonActive" : "resultButton";

  const { result } = useParams();
  // const {home} = useParams();
  // const {certificate} = useParams();
  useEffect(() => {
    if (result === "result") {
      setSelectSemester(true);
      setProfile(false);
      setCertificateNavbar(false);
    }
    if (result === "home") {
      setSelectSemester(false);
      setProfile(true);
      setCertificateNavbar(false);
    }

    if (result === "certificate") {
      setSelectSemester(false);
      setProfile(false);
      setCertificateNavbar(true);
    }
  }, []);

  return (
    <React.Fragment>
      <div className={classes.studenthomepagebody}>
        {profile && <StudentHome />}
        {selectSemester && <StudentResults />}
        {certificateNavbar && <StudentCertificate />}

        <div className={classes.navbar}>
          <button onClick={profileClickHandler} className={selectedClass2}>
            Home
          </button>

          <button className={selectedClass} onClick={resultClickHandler}>
            Results
          </button>

          <button className={selectedClass1} onClick={certificateClickHandler}>
            Certificate
          </button>

          <p className="welcomeName">Welcome Krishnaprasad</p>
          <div className={classes.logo}>
            <button className={classes.dropbtn}>
              <img src={logo} alt="" />
            </button>

            <div className={classes.dropdowncontent}>
              <div className={classes.btnimage}>
                <button onClick={homeClickHandler}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default StudentHomepageBody;
