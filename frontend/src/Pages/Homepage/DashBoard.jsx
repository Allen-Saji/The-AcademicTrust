import React from "react";
import ButtonDashBoard from "../../UI/ButtonDashBoard";
import classes from './css/DashBoard.module.css';

const DashBoard = props=>{

    return(
        <div className={classes.dashboard}>
            <ButtonDashBoard btnName={'Login'} routing={'login'} />
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
