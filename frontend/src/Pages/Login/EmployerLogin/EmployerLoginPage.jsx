import { Fragment } from "react";
import EmployerLoginHeader from "./EmployerLoginHeader";
import EmployerLoginForm from "./EmployerLoginForm";
const EmployerLoginPage = props =>{
    return(
        <Fragment>
            <EmployerLoginHeader />
            <EmployerLoginForm />
        </Fragment>
    );
}
export default EmployerLoginPage;