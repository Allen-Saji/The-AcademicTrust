import React from "react";
import logo from "../assets/logo/ktulogo.png";
import "./certificate.css";
import SubjectItem from "./SubjectItem";

const TABLEHEADER = [
  {
    slNo: "Sl No",
    courseCode: "Course Code",
    courseName: "Course Name",
    credit: "Credit",
    grade: "Grade",
    yearOfPassing: "Month and Year of Passing",
  },
];
const checkBranch = (branch) => {
  if (branch.substring(5, 7) === "CS") {
    return "Computer Science and Engineering";
  } else {
    return "Electronics and Communication Engineering";
  }
};
const Certificate = ({ certificateData }) => {
  const headers = TABLEHEADER.map((data) => (
    <tr class="resulttablerow">
      <td class="resulttablerow">{data.slNo}</td>
      {/* <td class="resulttablerow">{data.courseCode}</td> */}
      <td class="resulttablerow">{data.courseName}</td>
      <td class="resulttablerow">{data.credit}</td>
      <td class="resulttablerow">{data.grade}</td>
      <td class="resulttablerow">{data.yearOfPassing}</td>
    </tr>
  ));
  return (
    <React.Fragment>
      <div className="certificateWholebody">
        <div className="certificatebody">
          <div className="topheading">Certificate of Grades</div>
          <div className="Certificatemainheader">
            <img className="logo" src={logo} alt="" srcset="" />
            <h4 className="apjheading">
              APJ ABDUL KALAM TECHNOLOGICAL <br />
              UNIVERSITY
            </h4>
            <p className="apjbelowheading">
              Bachelor of Technology Degree Examination
            </p>
          </div>
          <div className="namereg">
            <p>Name: {certificateData.studentName}</p>
            <p>Reg No: {certificateData.registerNumber}</p>
          </div>

          <div className="certificatetablebody">
            <h4 class="certificatetablebodyheading1">
              Bachelor of Technology Degree Certificate
            </h4>
            <h4 class="certificatetablebodyheading2">
              Consolidated Statement Of Grades
            </h4>
            <div class="studentinfotablebody">
              <table class="studentinfotable">
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">
                    Name: {certificateData.studentName}
                  </td>
                  <td class="studenttableinforow">
                    Reg No: {certificateData.registerNumber}
                  </td>
                </tr>
                <tr class="studenttableinforow">
                  <td>Institution: {certificateData.institution}</td>
                </tr>
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">
                    Branch: {checkBranch(certificateData.registerNumber)}
                  </td>
                  <td class="studenttableinforow">Mode of Study: Regular</td>
                </tr>
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">
                    Year of Admission: {certificateData.yearOfAdmission}
                  </td>
                  <td class="studenttableinforow">
                    Duration of Program: 4 years
                  </td>
                </tr>
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">
                    Month and Year of Passing:{" "}
                    {certificateData.monthAndYearOfPassing}
                  </td>
                  <td class="studenttableinforow">
                    Medium of Instruction: English
                  </td>
                </tr>
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">Total Credits: 184</td>
                  <td class="studenttableinforow">
                    CGPA: {certificateData.cgpa}
                  </td>
                </tr>
              </table>
            </div>

            <div class="resulttablemain">
              <table class="resulttable">
                <tr>
                  <p class="heading2">First Semester</p>
                </tr>
                {headers}
                <SubjectItem
                  courseNames={certificateData.subjectNamesList[0]}
                  credits={certificateData.examcreditsList[0]}
                  months={certificateData.examMonthList[0]}
                  grades={certificateData.examGradeList[0]}
                  years={certificateData.examYearList[0]}
                />
              </table>
              <table class="resulttable">
                <tr>
                  <p class="heading2">Second Semester</p>
                </tr>
                {headers}
                <SubjectItem
                  courseNames={certificateData.subjectNamesList[1]}
                  credits={certificateData.examcreditsList[1]}
                  months={certificateData.examMonthList[1]}
                  grades={certificateData.examGradeList[1]}
                  years={certificateData.examYearList[1]}
                />
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Third Semester</p>
                </tr>
                {headers}
                <SubjectItem
                  courseNames={certificateData.subjectNamesList[2]}
                  credits={certificateData.examcreditsList[2]}
                  months={certificateData.examMonthList[2]}
                  grades={certificateData.examGradeList[2]}
                  years={certificateData.examYearList[2]}
                />
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Fourth Semester</p>
                </tr>
                {headers}
                <SubjectItem
                  courseNames={certificateData.subjectNamesList[3]}
                  credits={certificateData.examcreditsList[3]}
                  months={certificateData.examMonthList[3]}
                  grades={certificateData.examGradeList[3]}
                  years={certificateData.examYearList[3]}
                />
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Fifth Semester</p>
                </tr>
                {headers}
                <SubjectItem
                  courseNames={certificateData.subjectNamesList[4]}
                  credits={certificateData.examcreditsList[4]}
                  months={certificateData.examMonthList[4]}
                  grades={certificateData.examGradeList[4]}
                  years={certificateData.examYearList[4]}
                />
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Sixth Semester</p>
                </tr>
                {headers}
                <SubjectItem
                  courseNames={certificateData.subjectNamesList[5]}
                  credits={certificateData.examcreditsList[5]}
                  months={certificateData.examMonthList[5]}
                  grades={certificateData.examGradeList[5]}
                  years={certificateData.examYearList[5]}
                />
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Seventh Semester</p>
                </tr>
                {headers}
                <SubjectItem
                  courseNames={certificateData.subjectNamesList[6]}
                  credits={certificateData.examcreditsList[6]}
                  months={certificateData.examMonthList[6]}
                  grades={certificateData.examGradeList[6]}
                  years={certificateData.examYearList[6]}
                />
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Eighth Semester</p>
                </tr>
                {headers}
                <SubjectItem
                  courseNames={certificateData.subjectNamesList[7]}
                  credits={certificateData.examcreditsList[7]}
                  months={certificateData.examMonthList[7]}
                  grades={certificateData.examGradeList[7]}
                  years={certificateData.examYearList[7]}
                />
              </table>
              <h4 class="bottomhead">
                Student Activity 2 credits(non-academic) successfully completed
              </h4>
            </div>
          </div>
          <img className="ktubottomlogo" src={logo} alt="" />
          <p class="bottomname">Controller of Examination</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Certificate;
