import logo from '../../assets/logo/school.png';
import classes from './Dropdown.module.css';
const DropdownButton = () =>{
    return(
        <div className={classes.dropdown}>
            <button className={classes.dropbtn}>
              <img width="40px" height="40px" src={logo} alt="logo" />
              <i className="fa fa-caret-down"></i>
            </button>
            <div className={classes.dropdown_content}>
              <button>profile</button>
              <button>Logout</button>
            </div>
          </div>
    )
}
export default DropdownButton;