import React from "react";
import classes from "./css/Body.module.css";
import homepage from "../../assets/homepage1.jpg";
const Body = () => {
  return (
    <React.Fragment>
      <div className={classes.mainbody}>
        <div className={classes.leftsidebar}>
          <div className={classes.leftinfo}>
            <div className={classes.leftinfonumber}>29M$</div>
            <div className={classes.leftinfotext}>
              as research grant for FY 2021-22
            </div>
          </div>
          <div className={classes.between}></div>
          <div className={classes.leftinfo}>
            <div className={classes.leftinfonumber}>200+</div>
            <div className={classes.leftinfotext}>
              International collaborations
            </div>
          </div>
          <div className={classes.between}></div>
          <div className={classes.leftinfo}>
            <div className={classes.leftinfonumber}>20</div>
            <div className={classes.leftinfotext}>IPRs filed last year</div>
          </div>
        </div>
        <div className={classes.bodyimage}>
          <img
            className={classes.image}
            width="100%"
            height="400px"
            margin-left="5%"
            src={homepage}
            alt="homepage"
          />
          <div className={classes.footername}>
            <h2 className={classes.welcomemessage}>
              Welcome To The Official Website of APJ Abdul Kalam Technological
              University
            </h2>
          </div>
        </div>

        <div className={classes.announcement}>
          <div className={classes.textannouncement}>
            <p>Announcements</p>
          </div>
          <div className={classes.announcementdetails}>
            <div className={classes.announcementdetails1}>
              <ul>
                <li>uhwbuhebiuf</li>
                <li>jhsdbvjchwvjhcvwjdhakdlsnwflKNWFWEKFNWEJFN</li>
                <li>kdgddbdmnbmdnbvmndbvmnbdvdmnbvmdnbvmbdvm</li>
                <li>kefbvkenfebvkndbkbek</li>
                <li>ijndigjningiergergegnj</li>
                <li>ijrngrijenr</li>
                <li>ijenrrignrijgrnigjintrhlmhlretmlh</li>
                <li>sHDqdvgQWLDV</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Body;
