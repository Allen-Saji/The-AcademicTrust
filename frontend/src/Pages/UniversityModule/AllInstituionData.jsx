import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInstitutions } from "../../features/institution/institutionSlice";
import "./css/styles.css";

const AllInstitutionData = () => {
  const { institutions } = useSelector((state) => state.institutions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInstitutions());
  }, [dispatch]);

  // const DUMMY_DATA = [
  //   {
  //     id: 1,
  //     name: "St Josephs College",
  //     code: "SJC0001P",
  //   },
  //   {
  //     id: 2,
  //     name: "Aimil Bij University",
  //     code: "Aimu999",
  //   },
  //   {
  //     id: 3,
  //     name: "College of engineering TVM",
  //     code: "CET5542",
  //   },
  //   {
  //     id: 4,
  //     name: "College of Kidangoor",
  //     code: "CEK78945",
  //   },
  // ];
  return (
    <Fragment>
      <table className="institutiontable">
        <tbody>
          <tr className="institutetabledataheading">
            <th>All Institution</th>
            <th>College Code</th>
          </tr>
          {institutions.map((institution) => (
            <tr className="institutiontabledata">
              <th>{institution.name}</th>
              <th>{institution.institution_code}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default AllInstitutionData;
