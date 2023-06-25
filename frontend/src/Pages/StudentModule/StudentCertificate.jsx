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
  const viewButtonClickHandler = () => {
    setLoading(true);
    viewCertificate({ registerNumber: user.registration_no });
    setCertificate(true);
    setHeight(true);
  };

  const API_URL1 = "http://localhost:5000/api/student/viewCertificate";
  const viewCertificate = async (data) => {
    const response = await axios.post(API_URL1, data); // Pass it as an object with the same key name
    if (response.status === 200) {
      console.log(response.data);
      setCertificateData(response.data);
    } else {
      throw new Error(response.statusText);
    }
  };

  useEffect(() => {
    if (Object.keys(certificateData).length > 0) {
      setLoading(false); // Set loading status to false when certificateData is received
    }
  }, [certificateData]);

  if (loading) {
    return <Spinner />;
  }

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
      {certificate && !loading && (
        <Certificate certificateData={certificateData} />
      )}
    </React.Fragment>
  );
};
export default StudentCertificate;
