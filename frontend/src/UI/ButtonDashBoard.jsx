import React from "react";
import classes from './ButtonDashBoard.module.css';
const ButtonDashBoard = (props)=>{
    return(
        <button className={classes.button}>{props.btnName}</button>
    )
}
export default ButtonDashBoard;