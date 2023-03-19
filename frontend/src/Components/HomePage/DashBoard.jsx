import React from "react";
import ButtonDashBoard from "../../UI/ButtonDashBoard";
import DropDownButton from "../../UI/DropDownButton";
import classes from './DashBoard.module.css';

const DashBoard = props=>{
    return(
        <div className={classes.dashboard}>
            <DropDownButton />
            <ButtonDashBoard btnName={'Home'}/>
            <ButtonDashBoard btnName={'Organization'}/>
            <ButtonDashBoard btnName={'Affiliatioon'}/>
            <ButtonDashBoard btnName={'Academics'}/>
            <ButtonDashBoard btnName={'Research'}/>
            <ButtonDashBoard btnName={'Examination'}/>
            <ButtonDashBoard btnName={'Miscellaneous'}/>
        </div>
    );
};
export default DashBoard;
