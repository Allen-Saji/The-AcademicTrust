import React, { Fragment, useState } from "react";
import classes from "./css/UniversityHomepageBody.module.css";

import "./css/styles.css";
import axios from "axios";
const UniversityCertificateGenerator = () => {
  const [viewMesg, setMesg] = useState(false);
  const[errorMessage,setErrorMessage] = useState('');
  const [selectedBatchYear, setSelectedBatchYear] = useState(2018);

  const API_URL1 =
    "http://localhost:5000/api/admin/certificate/getCertificateDetails";
  const API_URL2 = "http://localhost:5000/api/admin/certificate";
  const API_URL3 =
    "http://localhost:5000/api/admin/certificate/issueCertificate";

  const issueCertificate = async (data) => {
    const response = await axios.post(API_URL2, data);
    if (response.status === 200) {
      console.log(response.data);
      const data2 = { students: response.data };
      const certificateDetails = await axios.post(API_URL1, data2);
      // console.log(certificateDetails.data.length);
      if (certificateDetails.status === 200) {
        for (let i = 0; i < certificateDetails.data.length; i++) {
          const data3 = certificateDetails.data[i];
          const data4 = {
            registerNumber: data3.registration_no,
            studentName: data3.student_name,
            institution: data3.institution,
            yearOfAdmission: data3.year_of_adm,
            monthAndYearOfPassing: data3.monthAndYearOfPassing,
            cgpa: data3.cgpa,
            subjectNames: data3.subjectNamesBySemester,
            subjectCredits: data3.subjectCreditsBySemester,
            subjectGrades: data3.subjectGradesBySemester,
            subjectExamMonths: data3.subjectExamMonthsBySemester,
            subjectExamYears: data3.subjectExamYearsBySemester,
          };
          const reply = await axios.post(API_URL3, data4);
          if (response.status === 200) {
            console.log(reply.data);
          }
  
        }
      } else {
        throw new Error(response.statusText);
        setErrorMessage('Certificate already issued')

      }
    } else {
      throw new Error(response.statusText);
      setErrorMessage('Certificate already issued')

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
        <label className="batch">Batch</label>

          <select
            onChange={onChangeSelectorHandler}
            className="dropdownselector"
          >
            <option value={2018}>BTech December 2018</option>
            <option value={2017}>Btech December 2017</option>
            {/* <option value={2024}>2024</option>
          <option value={2029}>2029</option> */}
          </select>
          <button className="generatebutton" onClick={generateButtonHandler}>
          Generate
        </button>
        </div>
       
        {viewMesg && (
          <p className="generatedtext"> Batch Generated successfully!!</p>
        )}{" "}
        <p>{errorMessage}</p>
      </div>
    </Fragment>
  );
};
export default UniversityCertificateGenerator;
