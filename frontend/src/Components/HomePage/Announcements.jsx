import { Fragment } from 'react';
import classes from './Announcement.module.css';
import image from '../../assets/Ann.png';
const Announcement = props =>{
    return(
        <Fragment>
            <div className={classes.img}>
            <img width='450px' height='400px' src={image} alt="Announce" />
            </div>
            <h2 className={classes.announce}>Announcements</h2>
            <div className={classes.announcement_content}>
                <ul>
                    <li className={classes.paragraph}>
                        uhwbuhebiufbe
                    </li>
                    <li className={classes.paragraph}>
                      jhsdbvjchwvjhcvwjdh
                    </li>
                    <li className={classes.paragraph}>
                       kdgdkchjhgwdcvmvcnvmnbvdndbdmnbmdnbvmndbvmnbdvdmnbvmdnbvmbdvm
                    </li>
                    <li className={classes.paragraph}>kefbvkenfebvkndbkbek</li>
                </ul>
            </div>
            <span className={classes.para}>
            <h2>Welcome To The Ofiicial Website of ABJ Technological University</h2>
            </span>
        </Fragment>
    )
}
export default Announcement;