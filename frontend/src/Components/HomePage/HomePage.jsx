import homepage from '../../assets/homepage.png';
import classes from './Homepage.module.css';
const Homepage = props =>{
    return(
        <div className={classes.img1}>
            <img width='1000px' height='400px' src={homepage} alt="homepage" />
            
        </div>
        
    );
};
export default Homepage;