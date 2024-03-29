import React, { Fragment, useState } from "react";
import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
import axios from "axios";
import { toast } from "react-toastify";

const UniversityResults = () => {
  const [publishResultButton, setPublishResultButton] = useState(true);
  const [updateResultButton, setUpdateRwsultButton] = useState(false);
  const [deleteResultButton, setDeleteResultButton] = useState(false);
  const [optionValue, setOptionValue] = useState(
    '{"year_of_adm":2017,"semester":1}'
  );

  const API_URL = "http://localhost:5000/api/admin/result/publish";
  const publishResult = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(API_URL, data);
      if (response.status === 200) {
        console.log("result successfully published!");
        toast.success("Results published successfully!");
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to publish results. Please try again.");
    }
  };

  const extractOptionValues = (optionValue) => {
    const optionObject = JSON.parse(optionValue);
    const { year_of_adm, semester } = optionObject;
    publishResult(optionObject);
  };

  const onChangeOptionValue = (e) => {
    setOptionValue(e.target.value);
  };

  const publishResultButtonHandler = () => {
    setPublishResultButton(true);
    setUpdateRwsultButton(false);
    setDeleteResultButton(false);
  };
  const updateResultButtonHandler = () => {
    setPublishResultButton(false);
    setUpdateRwsultButton(true);
    setDeleteResultButton(false);
  };
  const deleteResultButtonHandler = () => {
    setPublishResultButton(false);
    setUpdateRwsultButton(false);
    setDeleteResultButton(true);
  };

  const publishResultStyle = publishResultButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const updateResultStyle = updateResultButton
    ? "sidebarActive"
    : "sidebarNotActive";
  const deleteResultStyle = deleteResultButton
    ? "sidebarActive"
    : "sidebarNotActive";

  const resultTab = (
    <div className="resultSelectorbody">
      <div className="latestresultheading">
        <p>Latest Result</p>
      </div>
      <div>
        <select className="resultselector" onChange={onChangeOptionValue}>
          <option value='{"year_of_adm":2017,"semester":8}'>
            B TECH S8(R,S) June 2021
          </option>
          <option value='{"year_of_adm":2017,"semester":3}'>
            B TECH S3(R,S) DECEMBER 2018
          </option>
          <option value="">B TECH S5(R,S) MARCH 2023</option>
        </select>
        <button
          className="publishbutton"
          onClick={() => extractOptionValues(optionValue)}
        >
          Publish
        </button>
      </div>
    </div>
  );

  return (
    <Fragment>
      <div className={classes.universityhomepagesidebar}>
        <div className={classes.sidebartext1}>
          <button
            onClick={publishResultButtonHandler}
            className={publishResultStyle}
          >
            Publish Result
          </button>
        </div>
        {/* <div className={classes.spacebetween1}></div>
        <div className={classes.sidebartext1}>
          <button
            onClick={updateResultButtonHandler}
            className={updateResultStyle}
          >
            Update Result
          </button>
        </div> */}
        <div className={classes.spacebetween1}></div>
        {/* <div className={classes.sidebartext1}>
          <button
            onClick={deleteResultButtonHandler}
            className={deleteResultStyle}
          >
            Delete Result
          </button>
        </div> */}
        {/* <div className={classes.spacebetween1}></div> */}
      </div>
      {publishResultButton && resultTab}
    </Fragment>
  );
};
export default UniversityResults;
