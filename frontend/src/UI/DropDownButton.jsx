import classes from './DropDownButton.module.css';
const DropDownButton =()=>{
    return (
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>Login Hub</button>
        <div className={classes['dropdown-content']}>
          <a href="#">Admin</a>
          <a href="#">Faculty</a>
          <a href="#">Student</a>
        </div>
      </div>
    );
};
export default DropDownButton;
