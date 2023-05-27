import classes from "./css/UniversityHomepageBody.module.css";
import React, { Fragment, useState } from "react";
import "./css/styles.css";
const UniversityHome = () => {
  return (
    <Fragment>
      <div className={classes.universityhomepagesidebar}>
        <div className={classes.sidebartext1}>
          <button className="sidebarActive">Profile</button>
        </div>
        <div className={classes.spacebetween1}></div>
      </div>
      <div className="maintableforhome">
        <table className="institutiontable">
          <tr>
            <th>Admin Informations</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>Aimil</td>
          </tr>
          <tr>
            <td>Id</td>
            <td>Aimu999</td>
          </tr>
        </table>
      </div>
    </Fragment>
  );
};

export default UniversityHome;
