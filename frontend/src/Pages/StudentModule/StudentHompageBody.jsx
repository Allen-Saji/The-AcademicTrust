import classes from "./css/StudentHomepageBody.module.css";
import logo from "../../assets/logo/school.png";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StudentHome from "./StudentHome";
import StudentResults from "./StudentResults";
import StudentCertificate from "./StudentCertificate";
import { logout } from "../../features/auth/authSlice";
import Modal from "../../UI/Modal";
import axios from "axios";

const StudentHomepageBody = () => {
  const { user } = useSelector((state) => state.auth);
  //This states for top Navbar
  const [selectSemester, setSelectSemester] = useState(false);
  const [certificateNavbar, setCertificateNavbar] = useState(false);
  const [profile, setProfile] = useState(true);
  const [viewChangePasswordModal, setViewChangePasswordModal] = useState(false);

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

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    ConfirmNewPassword: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const changePasswordButtonHandler = () => {
    setViewChangePasswordModal(true);
  };
  const resetCancelButtonHandler = () => {
    setViewChangePasswordModal(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (formData.ConfirmNewPassword === formData.newPassword) {
      const data = {
        registration_no: user.registration_no,
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      };
      console.log(data);
      changePassword(data);
    } else {
      toast.error("Passwords don't match!");
    }
  };

  const API_URL = "http://localhost:5000/api/student/changePassword";
  const changePassword = async (data) => {
    const response = await axios.post(API_URL, data);
    if (response.status === 200) {
      toast.success("Password changed successfully!");
      setViewChangePasswordModal(false);
    } else {
      toast.error("some error occurred!");
    }
  };
  const changePass = (
    <Modal>
      <form onSubmit={onSubmit}>
        <div className="changepasswordbody">
          <div className="changepasswordmain">
            <div className="currentpass">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                onChange={onChange}
              />
            </div>
            <div className="newpass">
              <label>New Password</label>
              <input type="password" name="newPassword" onChange={onChange} />
            </div>
            <div className="confirmpass">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="ConfirmNewPassword"
                onChange={onChange}
              />
            </div>
            <div className="buttons">
              <button className="confirmbutton">Confirm</button>
              <button
                className="cancelbutton"
                onClick={resetCancelButtonHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );

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
                <button
                  className={classes.dropdowncontentbutton}
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
              <div className={classes.btnimage}>
                <button
                  onClick={changePasswordButtonHandler}
                  className={classes.dropdowncontentbutton}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
          {viewChangePasswordModal && changePass}
        </div>
      </div>
    </React.Fragment>
  );
};
export default StudentHomepageBody;
