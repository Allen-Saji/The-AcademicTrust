import classes from "./css/StudentHomepageBody.module.css";
import logo from "../../assets/logo/school.png";
import React, { useEffect, useState } from "react";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StudentHome from "./StudentHome";
import StudentResults from "./StudentResults";
import StudentCertificate from "./StudentCertificate";
import { logout } from "../../features/auth/authSlice";

const StudentHomepageBody = () => {
  const { user } = useSelector((state) => state.auth);
  //This states for top Navbar
  const [selectSemester, setSelectSemester] = useState(false);
  const [certificateNavbar, setCertificateNavbar] = useState(false);
  const [profile, setProfile] = useState(true);

  const Navigate = useNavigate();
  const Dispatch = useDispatch();

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

  const onLogout = () => {
    Dispatch(logout());
    Navigate("/");
  };

  //This logic is button styles for top Navbar
  const selectedClass = selectSemester ? "resultButtonActive" : "resultButton";
  const selectedClass1 = certificateNavbar
    ? "resultButtonActive"
    : "resultButton";
  const selectedClass2 = profile ? "resultButtonActive" : "resultButton";

  const { result } = useParams();

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

          <p className="welcomeName">Welcome {user.name}</p>
          <div className={classes.logo}>
            <button className={classes.dropbtn}>
              <img src={logo} alt="" />
            </button>

            <div className={classes.dropdowncontent}>
              <div className={classes.btnimage}>
                <button onClick={onLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default StudentHomepageBody;
