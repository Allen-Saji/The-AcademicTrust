import React, { Fragment } from "react";
import classes from './LeftDashBoard.module.css';

const LeftDashBoard = props =>{
    return (
      <Fragment>
        <div className={classes.leftdashboard}>
          <div className={classes.block1}>
            <p className={classes.blockP1}>29M$</p>
            <p className={classes.blockP2}>As research grant for FY 2021-22</p>
          </div>
          <div className={classes.lineBreak}></div>
          <div className={classes.block2}>
            <p className={classes.blockP3}>200+</p>
            <p className={classes.blockP4}>International collaborations</p>
          </div>
          <div className={classes.lineBreak}></div>
          <div className={classes.block3}>
            <p className={classes.blockP5}>20</p>
            <p className={classes.blockP6}>IPRs filed last year</p>
          </div>
          <div className={classes.block4}>
            <p>yada <br /> yada <br /> yada </p>
          </div>
        </div>
      </Fragment>
    );
};
export default LeftDashBoard;