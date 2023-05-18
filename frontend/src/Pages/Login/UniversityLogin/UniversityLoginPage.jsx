import { Fragment } from "react";
import UniversityLoginHeader from "./UniversityLoginHeader";
import UniversityLoginForm from "./UniversityLoginForm";
const UniversityLoginPage = props =>{
    return(
        <Fragment>
            <UniversityLoginHeader />
            <UniversityLoginForm />
        </Fragment>
    );
}
export default UniversityLoginPage;