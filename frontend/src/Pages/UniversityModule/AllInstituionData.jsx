import React, { Fragment } from "react";
import "./css/styles.css";

const AllInstitutionData = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      name: "St Josephs College",
      code: "SJC0001P",
    },
    {
      id: 2,
      name: "Aimil Bij University",
      code: "Aimu999",
    },
    {
      id: 3,
      name: "College of engineering TVM",
      code: "CET5542",
    },
    {
      id: 4,
      name: "College of Kidangoor",
      code: "CEK78945",
    },
  ];
  return (
    <Fragment>
      <table className="institutiontable">
        <tr className="institutetabledataheading">
          <th>All Institution</th>
          <th>College Code</th>
        </tr>
        {DUMMY_DATA.map((data) => (
          <tr className="institutiontabledata">
            <th>{data.name}</th>
            <th>{data.code}</th>
          </tr>
        ))}
      </table>
    </Fragment>
  );
};
export default AllInstitutionData;
