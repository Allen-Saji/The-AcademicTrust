import React from "react";
import ButtonDashBoard from "../../UI/ButtonDashBoard";
import classes from './css/DashBoard.module.css';
import LoginDropdown from "./LoginDropdown";

const DashBoard = props=>{

    return(
        <div className={classes.dashboard}>
            <LoginDropdown  />
            <ButtonDashBoard btnName={'Home'}/>
            <ButtonDashBoard btnName={'Organization'}/>
            <ButtonDashBoard btnName={'Affiliation'}/>
            <ButtonDashBoard btnName={'Academics'}/>
            <ButtonDashBoard btnName={'Research'}/>
            <ButtonDashBoard btnName={'Examination'}/>
            <ButtonDashBoard btnName={'Miscellaneous'}/>
        </div>
    );
};
export default DashBoard;
