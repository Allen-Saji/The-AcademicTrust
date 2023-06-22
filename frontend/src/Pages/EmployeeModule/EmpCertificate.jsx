import React, { useState } from "react";
import logo from "../../assets/logo/ktulogo.png";
import "./css/certificate.css";
const EmpCertificate = () => {
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
                <tr class="resulttablerow">
                  <td class="resulttablerow">Sl No</td>
                  <td class="resulttablerow">Course code</td>
                  <td class="resulttablerow">Course Name</td>
                  <td class="resulttablerow">Credit</td>
                  <td class="resulttablerow">Grade</td>
                  <td class="resulttablerow">M&Y of Passing</td>
                </tr>

                <tr class="data1strow">
                  <td class="tablerow">1</td>
                  <td class="tablerow">CST302</td>
                  <td class="tablerow">Data structure and algorithms</td>
                  <td class="tablerow">4</td>
                  <td class="tablerow">S</td>
                  <td class="tablerow">2024</td>
                </tr>
              </table>
              <table class="resulttable">
                <tr class="resulttablerow">
                  <td class="resulttablerow">Sl No</td>
                  <td class="resulttablerow">Course code</td>
                  <td class="resulttablerow">Course Name</td>
                  <td class="resulttablerow">Credit</td>
                  <td class="resulttablerow">Grade</td>
                  <td class="resulttablerow">M&Y of Passing</td>
                </tr>
                <tr>
                  <p class="heading2">Second Semester SGPA</p>
                </tr>
                <tr class="data1strow">
                  <td class="tablerow">1</td>
                  <td class="tablerow">CST302</td>
                  <td class="tablerow">Data structure and algorithms</td>
                  <td class="tablerow">4</td>
                  <td class="tablerow">S</td>
                  <td class="tablerow">2024</td>
                </tr>
              </table>

              <table class="resulttable">
                <tr class="resulttablerow">
                  <td class="resulttablerow">Sl No</td>
                  <td class="resulttablerow">Course code</td>
                  <td class="resulttablerow">Course Name</td>
                  <td class="resulttablerow">Credit</td>
                  <td class="resulttablerow">Grade</td>
                  <td class="resulttablerow">M&Y of Passing</td>
                </tr>
                <tr>
                  <p class="heading2">Third Semester SGPA</p>
                </tr>
                <tr class="data1strow">
                  <td class="tablerow">1</td>
                  <td class="tablerow">CST302</td>
                  <td class="tablerow">Data structure and algorithms</td>
                  <td class="tablerow">4</td>
                  <td class="tablerow">S</td>
                  <td class="tablerow">2024</td>
                </tr>
              </table>

              <table class="resulttable">
                <tr class="resulttablerow">
                  <td class="resulttablerow">Sl No</td>
                  <td class="resulttablerow">Course code</td>
                  <td class="resulttablerow">Course Name</td>
                  <td class="resulttablerow">Credit</td>
                  <td class="resulttablerow">Grade</td>
                  <td class="resulttablerow">M&Y of Passing</td>
                </tr>
                <tr>
                  <p class="heading2">Fourth Semester SGPA</p>
                </tr>
                <tr class="data1strow">
                  <td class="tablerow">1</td>
                  <td class="tablerow">CST302</td>
                  <td class="tablerow">Data structure and algorithms</td>
                  <td class="tablerow">4</td>
                  <td class="tablerow">S</td>
                  <td class="tablerow">2024</td>
                </tr>
              </table>

              <table class="resulttable">
                <tr class="resulttablerow">
                  <td class="resulttablerow">Sl No</td>
                  <td class="resulttablerow">Course code</td>
                  <td class="resulttablerow">Course Name</td>
                  <td class="resulttablerow">Credit</td>
                  <td class="resulttablerow">Grade</td>
                  <td class="resulttablerow">M&Y of Passing</td>
                </tr>
                <tr>
                  <p class="heading2">Fifth Semester SGPA</p>
                </tr>
                <tr class="data1strow">
                  <td class="tablerow">1</td>
                  <td class="tablerow">CST302</td>
                  <td class="tablerow">Data structure and algorithms</td>
                  <td class="tablerow">4</td>
                  <td class="tablerow">S</td>
                  <td class="tablerow">2024</td>
                </tr>
              </table>

              <table class="resulttable">
                <tr class="resulttablerow">
                  <td class="resulttablerow">Sl No</td>
                  <td class="resulttablerow">Course code</td>
                  <td class="resulttablerow">Course Name</td>
                  <td class="resulttablerow">Credit</td>
                  <td class="resulttablerow">Grade</td>
                  <td class="resulttablerow">M&Y of Passing</td>
                </tr>
                <tr>
                  <p class="heading2">Sixth Semester SGPA</p>
                </tr>
                <tr class="data1strow">
                  <td class="tablerow">1</td>
                  <td class="tablerow">CST302</td>
                  <td class="tablerow">Data structure and algorithms</td>
                  <td class="tablerow">4</td>
                  <td class="tablerow">S</td>
                  <td class="tablerow">2024</td>
                </tr>
              </table>

              <table class="resulttable">
                <tr class="resulttablerow">
                  <td class="resulttablerow">Sl No</td>
                  <td class="resulttablerow">Course code</td>
                  <td class="resulttablerow">Course Name</td>
                  <td class="resulttablerow">Credit</td>
                  <td class="resulttablerow">Grade</td>
                  <td class="resulttablerow">M&Y of Passing</td>
                </tr>
                <tr>
                  <p class="heading2">Seventh Semester SGPA</p>
                </tr>
                <tr class="data1strow">
                  <td class="tablerow">1</td>
                  <td class="tablerow">CST302</td>
                  <td class="tablerow">Data structure and algorithms</td>
                  <td class="tablerow">4</td>
                  <td class="tablerow">S</td>
                  <td class="tablerow">2024</td>
                </tr>
              </table>

              <table class="resulttable">
                <tr class="resulttablerow">
                  <td class="resulttablerow">Sl No</td>
                  <td class="resulttablerow">Course code</td>
                  <td class="resulttablerow">Course Name</td>
                  <td class="resulttablerow">Credit</td>
                  <td class="resulttablerow">Grade</td>
                  <td class="resulttablerow">M&Y of Passing</td>
                </tr>
                <tr>
                  <p class="heading2">Eighth Semester SGPA</p>
                </tr>
                <tr class="data1strow">
                  <td class="tablerow">1</td>
                  <td class="tablerow">CST302</td>
                  <td class="tablerow">Data structure and algorithms</td>
                  <td class="tablerow">4</td>
                  <td class="tablerow">S</td>
                  <td class="tablerow">2024</td>
                </tr>
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
export default EmpCertificate;
