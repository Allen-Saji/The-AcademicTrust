import React from 'react';
import EmployeeHomepageHeader from './EmployeeHomepageHeader';
import EmployeeHomepageBody from './EmployeeHomepageBody';
const EmployeeHomepage = ()=>{
    return(
        <React.Fragment>
            <EmployeeHomepageHeader />
            <EmployeeHomepageBody />
        </React.Fragment>
    );
};
export default EmployeeHomepage;