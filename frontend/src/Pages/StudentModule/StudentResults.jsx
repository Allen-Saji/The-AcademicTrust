import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import "./css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarksAndGrades } from "../../features/result/resultSlice";
import classes from "./css/StudentHomepageBody.module.css";

const StudentResults = () => {
  const [viewResult, setViewResult] = useState(true);
  const [pendingResult, setPendingResult] = useState(false);
  const [reports, setReports] = useState(false);
  const [viewResultTable, setViewResultTable] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(1);

  // const [s1Selector, setS1Selector] = useState(false);
  // const [s2Selector, setS2Selector] = useState(false);
  // const [s3Selector, setS3Selector] = useState(false);
  // const [s4Selector, setS4Selector] = useState(false);
  // const [s5Selector, setS5Selector] = useState(false);
  // const [s6Selector, setS6Selector] = useState(false);
  // const [s7Selector, setS7Selector] = useState(false);
  // const [s8Selector, setS8Selector] = useState(false);

  const Dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { results } = useSelector((state) => state.results);

  const viewResultButtonHandler = () => {
    setViewResult(true);
    setPendingResult(false);
    setReports(false);
  };
  const pendingResultButtonHandler = () => {
    setViewResult(false);
    setPendingResult(true);
    setReports(false);
  };
  const reportsButtonHandler = () => {
    setViewResult(false);
    setPendingResult(false);
    setReports(true);
  };

  const viewResultButton = viewResult
    ? "selectedSidebarButton"
    : "notSelectedSidebarButton";
  const pendingResultButton = pendingResult
    ? "selectedSidebarButton"
    : "notSelectedSidebarButton";
  const reportsButton = reports
    ? "selectedSidebarButton"
    : "notSelectedSidebarButton";

  const DUMMY_DATA = [
    {
      id: 1,
      sub: "Compiler Design",
      grade: "A",
      credit: "4",
    },
    {
      id: 2,
      sub: "Algorithm Analysis",
      grade: "B",
      credit: "4",
    },
    {
      id: 3,
      sub: "Image Processing",
      grade: "S",
      credit: "4",
    },
  ];
  const DUMMY_DATA2 = [
    {
      id: 1,
      sub: "Data Structure",
      grade: "A",
      credit: "4",
    },
    {
      id: 2,
      sub: "Algorithm Analysis",
      grade: "B",
      credit: "4",
    },
    {
      id: 3,
      sub: "Image Processing",
      grade: "S",
      credit: "4",
    },
  ];
  const DUMMY_DATA3 = [
    {
      id: 1,
      sub: "Data Structure",
      grade: "A",
      credit: "4",
    },
    {
      id: 2,
      sub: "SocialScience",
      grade: "B",
      credit: "4",
    },
    {
      id: 3,
      sub: "Image Processing",
      grade: "S",
      credit: "4",
    },
  ];

  const student_id = user.registration_no;

  const handleViewResults = () => {
    setViewResultTable((state) => !state);
    const data = { student_id, semester: selectedSemester };
    Dispatch(fetchMarksAndGrades(data));

  };
  const onChangeSelectedSemester =(e)=>{
    setSelectedSemester(e.target.value);
  }

  const semesterSelection = (
    <div className={classes.semesterselectorbody}>
      <div className={classes.semesterselecttext}>
        <p>Select Semester </p>
      </div>
      <div className={classes.semesterselector}>
        <select
          id="semesterSelect"
          value={selectedSemester}
          onChange={onChangeSelectedSemester}
          
        >
          <option value={1}>S1</option>
          <option value={2}>S2</option>
          <option value={3}>S3</option>
          <option value={4}>S4</option>
          <option value={5}>S5</option>
          <option value={6}>S6</option>
          <option value={7}>S7</option>
          <option value={8}>S8</option>
        </select>
      </div>
      <div className={classes.selectorbutton}>
        <button onClick={handleViewResults}>View</button>
      </div>
      <div className={classes.setHeight}></div>
    </div>
  );



  //   useEffect(()=>{
  //     if (selectedSemester===2) {
  //       setS2Selector(true);
  //       setS1Selector(false);
       
  //       setS3Selector(false);
  //       setS4Selector(false);
  //       setS5Selector(false);
  //       setS6Selector(false);
  //       setS7Selector(false);
  //       setS8Selector(false);
  //     }
  
  
  
  //   if (selectedSemester === 1) {
  //     setS1Selector(true);
  //     setS2Selector(false);
  //     setS3Selector(false);
  //     setS4Selector(false);
  //     setS5Selector(false);
  //     setS6Selector(false);
  //     setS7Selector(false);
  //     setS8Selector(false);
  //   }
    
    
  //   if (selectedSemester === 3) {
  //     setS1Selector(false);
  //     setS2Selector(false);
  //     setS3Selector(true);
  //     setS4Selector(false);
  //     setS5Selector(false);
  //     setS6Selector(false);
  //     setS7Selector(false);
  //     setS8Selector(false);
  //   }
  //   if (selectedSemester === 4) {
  //     setS1Selector(false);
  //     setS2Selector(false);
  //     setS3Selector(false);
  //     setS4Selector(true);
  //     setS5Selector(false);
  //     setS6Selector(false);
  //     setS7Selector(false);
  //     setS8Selector(false);
  //   }
  //   if (selectedSemester === 5) {
  //     setS1Selector(false);
  //     setS2Selector(false);
  //     setS3Selector(false);
  //     setS4Selector(false);
  //     setS5Selector(true);
  //     setS6Selector(false);
  //     setS7Selector(false);
  //     setS8Selector(false);
  //   }
  //   if (selectedSemester === 6) {
  //     setS1Selector(false);
  //     setS2Selector(false);
  //     setS3Selector(false);
  //     setS4Selector(false);
  //     setS5Selector(false);
  //     setS6Selector(true);
  //     setS7Selector(false);
  //     setS8Selector(false);
  //   }
  //   if (selectedSemester === 7) {
  //     setS1Selector(false);
  //     setS2Selector(false);
  //     setS3Selector(false);
  //     setS4Selector(false);
  //     setS5Selector(false);
  //     setS6Selector(false);
  //     setS7Selector(true);
  //     setS8Selector(false);
  //   }
  //   if (selectedSemester === 8) {
  //     setS1Selector(false);
  //     setS2Selector(false);
  //     setS3Selector(false);
  //     setS4Selector(false);
  //     setS5Selector(false);
  //     setS6Selector(false);
  //     setS7Selector(false);
  //     setS8Selector(true);
  //   }
  //   },[onChangeSelectedSemester]);

      
  
  // console.log(selectedSemester);

  const resultTable = (
    <div className={classes.resultSelectorBody}>
      <table className="tableliine">
        <tbody>
        <tr className="tableheadinglines">
          <th className="tableheadinglinesubject">Subject</th>
          <th className="tableheadinglinegrade">Grade</th>
          <th className="tableheadinglinecredit">Credit</th>
        </tr>
           {/* S1 result table data */}
        {
          DUMMY_DATA.map((data) => (
            <tr className="tableheadinglines">
              <td className="tabledata">{data.sub}</td>
              <td className="tabledata">{data.grade}</td>
              <td className="tabledata">{data.credit}</td>
            </tr>
          ))}
                 {/* S2 result table data */}
        
          </tbody>
      </table>
    </div>
  );
  // const resultTable1 = (
  //   <div className={classes.resultSelectorBody}>
  //     <table className="tableliine">
  //       <tbody>
  //       <tr className="tableheadinglines">
  //         <th className="tableheadinglinesubject">Subject</th>
  //         <th className="tableheadinglinegrade">Grade</th>
  //         <th className="tableheadinglinecredit">Credit</th>
  //       </tr>
  //          {/* S1 result table data */}
  //          {s2Selector  &&
  //   DUMMY_DATA2.map((data) => (
  //     <tr className="tableheadinglines">
  //       <td className="tabledata">{data.sub}</td>
  //       <td className="tabledata">{data.grade}</td>
  //       <td className="tabledata">{data.credit}</td>
  //     </tr>
  //   ))}
  //                {/* S2 result table data */}
        
  //         </tbody>
  //     </table>
  //   </div>
  // );


 
           {/* S3 result table data */}
  {/* {s3Selector &&
    DUMMY_DATA3.map((data) => (
      <tr className="tableheadinglines">
        <td className="tabledata">{data.sub}</td>
        <td className="tabledata">{data.grade}</td>
        <td className="tabledata">{data.credit}</td>
      </tr>
    ))}
           {/* S4 result table data */}
  {/* {s4Selector &&
    DUMMY_DATA.map((data) => (
      <tr className="tableheadinglines">
        <td className="tabledata">{data.sub}</td>
        <td className="tabledata">{data.grade}</td>
        <td className="tabledata">{data.credit}</td>
      </tr>
    ))} */}
           {/* S5 result table data */}
  {/* {s5Selector &&
    DUMMY_DATA.map((data) => (
      <tr className="tableheadinglines">
        <td className="tabledata">{data.sub}</td>
        <td className="tabledata">{data.grade}</td>
        <td className="tabledata">{data.credit}</td>
      </tr>
    ))} */}
           {/* S6 result table data */}
  {/* {s6Selector &&
    DUMMY_DATA.map((data) => (
      <tr className="tableheadinglines">
        <td className="tabledata">{data.sub}</td>
        <td className="tabledata">{data.grade}</td>
        <td className="tabledata">{data.credit}</td>
      </tr>
    ))} */}
           {/* S7 result table data */}
  {/* {s7Selector &&
    DUMMY_DATA.map((data) => (
      <tr className="tableheadinglines">
        <td className="tabledata">{data.sub}</td>
        <td className="tabledata">{data.grade}</td>
        <td className="tabledata">{data.credit}</td>
      </tr>
    ))} */}
           {/* S8 result table data */}
  {/* {s8Selector &&
    DUMMY_DATA.map((data) => (
      <tr className="tableheadinglines">
        <td className="tabledata">{data.sub}</td>
        <td className="tabledata">{data.grade}</td>
        <td className="tabledata">{data.credit}</td>
      </tr>
    ))}  */}
  return (
    <React.Fragment>
      <div className={classes.studenthomepagesidebar}>
        <div className={classes.sidebartext}>
          <button
            onClick={viewResultButtonHandler}
            className={viewResultButton}
          >
            View Result
          </button>
        </div>
        <div className={classes.spacebetween}></div>
        <div className={classes.sidebartext}>
          <button
            onClick={pendingResultButtonHandler}
            className={pendingResultButton}
          >
            Pending Results
          </button>
        </div>
        <div className={classes.spacebetween}></div>
        <div className={classes.sidebartext}>
          <button onClick={reportsButtonHandler} className={reportsButton}>
            Reports
          </button>
        </div>
        <div className={classes.spacebetween}></div>
        <div className={classes.setSidebarHeight}></div>
      </div>
      {viewResult && semesterSelection}
      {viewResultTable  && resultTable}
      {/* {viewResultTable && selectedSemester === 2 && resultTable} */}
    </React.Fragment>
  );
};
export default StudentResults;
