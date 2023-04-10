import React from "react";
import classes from './ButtonDashBoard.module.css';
import {useNavigate } from "react-router-dom";
const ButtonDashBoard = (props)=>{ 
  const navigate = useNavigate()
  function clickHandler(){
     console.log("jdjd");
     navigate(props.routing);
  }
    return(
        <button onClick={clickHandler}  className={classes.button}>{props.btnName}</button>
    )
}
export default ButtonDashBoard;