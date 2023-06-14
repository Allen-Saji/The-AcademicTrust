import React, { Fragment, useState } from "react";
import classes from "./css/UniversityHomepageBody.module.css";

import "./css/styles.css";
import axios from "axios";
const UniversityCertificateGenerator = () => {
  const [viewMesg, setMesg] = useState(false);
  const [selectedBatchYear, setSelectedBatchYear] = useState(2018);

  const API_URL1 =
    "http://localhost:5000/api/admin/certificate/getCertificateDetails";
  const API_URL2 = "http://localhost:5000/api/admin/certificate";
  const API_URL3 = "http://localhost:5000/api/admin/certificate/contract";

  const issueCertificate = async (data) => {
    const response = await axios.post(API_URL2, data);
    if (response.status === 200) {
      console.log(response.data);
      const data2 = { students: response.data };
      const certificateDetails = await axios.post(API_URL1, data2);
      if (certificateDetails.status === 200) {
        console.log(certificateDetails.data);
      }
    } else {
      throw new Error(response.statusText);
    }
  };

  const generateButtonHandler = () => {
    const data = { year_of_adm: selectedBatchYear };
    issueCertificate(data);
    setMesg(true);
  };
  const onChangeSelectorHandler = (event) => {
    setSelectedBatchYear(event.target.value);
  };
  return (
    <Fragment>
      <div className="certificateSelectorbody">
        <div className="dropdownbox">
          <select
            onChange={onChangeSelectorHandler}
            className="dropdownselector"
          >
            <option value={2018}>2018</option>
            {/* <option value={2024}>2024</option>
          <option value={2029}>2029</option> */}
          </select>
        </div>
        <button className="generatebutton" onClick={generateButtonHandler}>
          Generate
        </button>
        {viewMesg && (
          <p className="generatedtext"> Batch Generated successfully!!</p>
        )}{" "}
      </div>
    </Fragment>
  );
};
export default UniversityCertificateGenerator;
