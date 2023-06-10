import React, { Fragment, useState } from "react";
import classes from "./css/UniversityHomepageBody.module.css";
import "./css/styles.css";
const UniversityCertificateGenerator = () => {
  const [viewMesg,setMesg] = useState(false);
  const generateButtonHandler = ()=>{
    setMesg(true);
  }
  return (
    <Fragment>
      <div className='certificateSelectorbody'>
        <button className="generatebutton" onClick={generateButtonHandler}>Generate</button>
        <button className="generatebutton">Deploy</button>
       {viewMesg && <p className="generatedtext">Generated successfully!!</p>}      </div>
    </Fragment>
  );
};
export default UniversityCertificateGenerator;
