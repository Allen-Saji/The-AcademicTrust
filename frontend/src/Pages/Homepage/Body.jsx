import React, { useEffect, useState } from "react";
import classes from "./css/Body.module.css";
import tick from "../../assets/tick.png";
import axios from "axios";

import ImageSlider from "./ImageSlider";
import pic1 from "../../assets/homepage1.jpg";
import pic2 from "../../assets/homepage2.jpg";
import pic3 from "../../assets/homepage3.jpg";
import pic4 from "../../assets/homepage4.jpg";
import pic5 from "../../assets/homepage5.jpg";
const Body = () => {
  const [announcements, setAnnouncements] = useState([]);
  const slides = [
    { url: pic1, title: "beach" },
    { url: pic2, title: "boat" },
    { url: pic3, title: "forest" },
    { url: pic4, title: "city" },
    { url: pic5, title: "italy" },
  ];

  const API_URL = "http://localhost:5000/api/admin/announcements";

  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const response = await axios.get(API_URL);
        const announcements = response.data;
        setAnnouncements(announcements);
        // Handle the fetched announcements as needed
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
        // Handle the error condition
      }
    };

    getAnnouncements(); // Invoke the function on page load
  }, []); // Empty dependency array ensures it only runs once on page load

  const announcementItem = (
    <>
      {announcements.map((announcement) => (
        <li>{announcement.title}</li>
      ))}
    </>
  );

  const containerStyles = {
    width: "100%",
    height: "485px",
    margin: "0 auto",
  };
  return (
    <React.Fragment>
      <div className={classes.mainbody}>
        <div className={classes.bodyimage}>
          <div className={classes.images}>
            <div style={containerStyles}>
              <ImageSlider slides={slides} />
            </div>
          </div>
          <div className={classes.footername}>
            <h2 className={classes.welcomemessage}>
              Welcome To The Official Website of APJ Abdul Kalam Technological
              University
            </h2>
          </div>
        </div>

        <div className={classes.announcement}>
          <div className={classes.textannouncement}>
            <p>Announcements</p>
          </div>
          <div className={classes.announcementdetails}>
            <div className={classes.announcementdetails1}>
              <ul>{announcementItem}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mainObjectives}>
        <div className={classes.mainHeading}>
          <p>Objectives</p>
        </div>
        <div className={classes.mainMissions}>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>

            <p>
              To give leadership to the technology related policy formulation
              and Engineering Planning for the State
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              It also emphasizes to improve the academic standards of the
              graduate, post graduate and research programmes in engineering
              science, technology and management.
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To regulate the academic standards of all Colleges affiliated to
              the University.
            </p>
          </div>

          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To monitor, regulate and ensure that the academic standards of all
              institutions not affiliated to the University, but conducting
              engineering courses in the State, are in accordance with law and
              in accordance with such guidelines and orders issued by the
              University.
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To design new courses and curriculam based on the advances in
              accordance with the norms, if any, laid down by the AICTE.
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To act as the nodal agency for linkages in the field of
              engineering sciences, technology and management with other
              national and international institution
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To impart training with the use of modern communication media and
              technologies for the development of skills appropriate for a
              learning society in the context of innovations, research and
              discovery by establishing educational network related to
              engineering sciences
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To give thrust for the development of indigenous technologies by
              encouraging research and other academic activities in the related
              areas
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To substantially increase enrolment in Postgraduate education and
              research programmes in the colleges and institutions with the aim
              of promoting engineering research, development and innovation
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To support the establishment of Centres of excellence for
              multidisciplinary applied research in specific thematic areas
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To improve the learning skills of the students by constantly and
              continuously improving and upgrading the academic quality and
              standards of faculty{" "}
            </p>
          </div>
          <div className={classes.missions}>
            <div>
              <img src={tick} alt="" />
            </div>
            <p>
              To introduce and sustain innovative systematic quality improvement
              programmes in the field of technical education.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Body;
