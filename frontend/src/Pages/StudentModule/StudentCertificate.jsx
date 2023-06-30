import React, { useState, useEffect } from "react";
import "./css/styles.css";
import Spinner from "../../Components/Spinner";
import classes from "./css/StudentHomepageBody.module.css";
import Certificate from "../../Components/Certificate";
import { useSelector } from "react-redux";
import axios from "axios";

const StudentCertificate = () => {
  const { user } = useSelector((state) => state.auth);
  const [certificate, setCertificate] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading status
  const [height, setHeight] = useState(false);
  const [certificateData, setCertificateData] = useState({});
  const [error, setError] = useState(null); // New state for error handling
  const [cgpa, setCgpa] = useState([]);
  const viewButtonClickHandler = () => {
    setLoading(true);
    viewCertificate({ registerNumber: user.registration_no });
    setCertificate(true);
    setHeight(true);
  };

  const API_URL1 = "http://localhost:5000/api/student/viewCertificate";
  const API_URL2 = "http://localhost:5000/api/student/getCgpa";
  const viewCertificate = async (data) => {
    try {
      const cgpaEachSem = await axios.post(API_URL2, {
        register_no: user.registration_no,
      });
      if (cgpaEachSem.status === 200) {
        setCgpa(cgpaEachSem.data);
      }
      const response = await axios.post(API_URL1, data);

      if (response.status === 200) {
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


  const sidebarheight = height
    ? "studenthomepagesidebarhigh"
    : "studenthomepagesidebarlow";

  return (
    <React.Fragment>
      <div className={sidebarheight}>
        <div className={classes.sidebartext}>
          <button className="selectedSidebarButton">View Certificate</button>
        </div>
        <div className={classes.spacebetween}></div>
      </div>
      <div className={classes.certificateselectorbody}>
        <div className={classes.certificateselecttext}>
          <p>View Graduation Certificate </p>
        </div>
        <div className={classes.certificatebutton1}>
          <button
            onClick={viewButtonClickHandler}
            className={classes.certificatebutton}
          >
            View
          </button>
        </div>
      </div>
      {error && <p className={classes.error}>{error}</p>}{" "}
      {/* Render the error message */}
      {loading && <Spinner />}
      {certificate && !loading && !error && (
        <Certificate certificateData={certificateData} cgpa={cgpa} />
      )}
    </React.Fragment>
  );
};
export default StudentCertificate;
