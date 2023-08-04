import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinner";

import "./css/styles.css";
import axios from "axios";
const UniversityCertificateGenerator = () => {
  const [selectedBatchYear, setSelectedBatchYear] = useState(2018);
  const [loading, setLoading] = useState(false);
  const API_URL1 =
    "http://localhost:5000/api/admin/certificate/getCertificateDetails";
  const API_URL2 = "http://localhost:5000/api/admin/certificate";
  const API_URL3 =
    "http://localhost:5000/api/admin/certificate/issueCertificate";

  const issueCertificate = async (data) => {
    try {
      const response = await axios.post(API_URL2, data);
      if (response.status === 200) {
        const data2 = { students: response.data };
        const certificateDetails = await axios.post(API_URL1, data2);
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
            if (reply.status === 200) {
              console.log(reply.data);
              toast.success(`Certificate issued successfully!`);
            }
          }
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("An error occurred");
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const generateButtonHandler = async () => {
    const data = { year_of_adm: selectedBatchYear };
    setLoading(true);
    await issueCertificate(data);
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
            <option value={2018}>BTech 2022</option>
            <option value={2017}>Btech 2021</option>
            {/* <option value={2024}>2024</option>
          <option value={2029}>2029</option> */}
          </select>
          <button className="generatebutton" onClick={generateButtonHandler}>
            Generate
          </button>
        </div>
        {loading && <Spinner />}
      </div>
    </Fragment>
  );
};
export default UniversityCertificateGenerator;
