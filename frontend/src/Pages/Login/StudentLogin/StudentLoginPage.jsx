import { Fragment } from "react";
import StudentLoginHeader from "./StudentLoginHeader";
import StudentLoginForm from "./StudentLoginForm";
const StudentLoginPage = props =>{
    return(
        <Fragment>
            <StudentLoginHeader />
            <StudentLoginForm />
        </Fragment>
    );
}
export default StudentLoginPage;