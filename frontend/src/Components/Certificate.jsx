import React from "react";
import logo from "../assets/logo/ktulogo.png";
import "./certificate.css";

const TABLEHEADER = [
  {
    slNo: "Sl No",
    courseCode: "Course Code",
    courseName: "Course Name",
    credit: "Credit",
    grade: "Grade",
    yearOfPassing: "M&Y of passing",
  },
];
const STDS1DATA = [
  {
    slNo: 1,
    courseCode: "CST302",
    courseNme: "Data Structure And Algorithm",
    credit: 4,
    grade: "S",
    yearOfPassing: 2024,
  },
  {
    slNo: 2,
    courseCode: "CST304",
    courseNme: "Database And Management System",
    credit: 4,
    grade: "A",
    yearOfPassing: 2022,
  },
];

const Certificate = () => {
  const headers = TABLEHEADER.map((data) => (
    <tr class="resulttablerow">
      <td class="resulttablerow">{data.slNo}</td>
      <td class="resulttablerow">{data.courseCode}</td>
      <td class="resulttablerow">{data.courseName}</td>
      <td class="resulttablerow">{data.credit}</td>
      <td class="resulttablerow">{data.grade}</td>
      <td class="resulttablerow">{data.yearOfPassing}</td>
    </tr>
  ));
  const stddata = STDS1DATA.map((data) => (
    <tr key={data.slNo} class="data1strow">
      <td class="tablerow">{data.slNo}</td>
      <td class="tablerow">{data.courseCode}</td>
      <td class="tablerow">{data.courseNme}</td>
      <td class="tablerow">{data.credit}</td>
      <td class="tablerow">{data.grade}</td>
      <td class="tablerow">{data.yearOfPassing}</td>
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
            <p>Name:</p>
            <p>Reg No:</p>
          </div>

          <div className="certificatetablebody">
            <h4 class="certificatetablebodyheading1">
              Bachelor of Technology Degree Certificate
            </h4>
            <h4 class="certificatetablebodyheading2">Certificate Of Grades</h4>
            <div class="studentinfotablebody">
              <table class="studentinfotable">
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">Name:</td>
                  <td class="studenttableinforow">Ref No:</td>
                </tr>
                <tr class="studenttableinforow">
                  <td>Institution:</td>
                </tr>
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">Branch:</td>
                  <td class="studenttableinforow">Mode of Study:</td>
                </tr>
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">Year of Admission:</td>
                  <td class="studenttableinforow">Duration of Program:</td>
                </tr>
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">
                    Month and Year of Passing:
                  </td>
                  <td class="studenttableinforow">Medium of Instruction:</td>
                </tr>
                <tr class="studenttableinforow">
                  <td class="studenttableinforow">Total Credits:</td>
                  <td class="studenttableinforow">CGPA:</td>
                </tr>
              </table>
            </div>

            <div class="resulttablemain">
              <table class="resulttable">
                <tr>
                  <p class="heading2">First Semester SGPA</p>
                </tr>
                {headers}
                {stddata}
              </table>
              <table class="resulttable">
                <tr>
                  <p class="heading2">Second Semester SGPA</p>
                </tr>
                {headers}
                {stddata}
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Third Semester SGPA</p>
                </tr>
                {headers}
                {stddata}
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Fourth Semester SGPA</p>
                </tr>
                {headers}
                {stddata}
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Fifth Semester SGPA</p>
                </tr>
                {headers}
                {stddata}
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Sixth Semester SGPA</p>
                </tr>
                {headers}
                {stddata}
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Seventh Semester SGPA</p>
                </tr>
                {headers}
                {stddata}
              </table>

              <table class="resulttable">
                <tr>
                  <p class="heading2">Eighth Semester SGPA</p>
                </tr>
                {headers}
                {stddata}
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
