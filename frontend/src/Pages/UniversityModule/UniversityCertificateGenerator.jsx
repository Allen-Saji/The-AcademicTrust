import React, { Fragment, useState } from "react";
import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
const UniversityCertificateGenerator = () => {
  const [viewMesg,setMesg] = useState(false);
  const [selectedBatchYear,setSelectedBatchYear] = useState(2019);

  const generateButtonHandler = ()=>{
    setMesg(true);
 
  }
  const onChangeSelectorHandler =(event)=>{
    setSelectedBatchYear(event.target.value);
  }
  return (
    <Fragment>
      <div className='certificateSelectorbody'>
        <div className="dropdownbox">
        <select onChange={onChangeSelectorHandler} className="dropdownselector">
          <option value={2019}>2019</option>
          <option value={2024}>2024</option>
          <option value={2029}>2029</option>
        </select>
        </div>
     
        <button className="generatebutton" onClick={generateButtonHandler}>Generate</button>
       {viewMesg && <p className="generatedtext"> Batch Generated successfully!!</p>}      </div>
    </Fragment>
  );
};
export default UniversityCertificateGenerator;
