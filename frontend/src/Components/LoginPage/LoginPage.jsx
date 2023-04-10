import { Fragment } from "react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
const LoginPage = props =>{
    return(
        <Fragment>
            <LoginHeader />
            <LoginForm />
        </Fragment>
    );
}
export default LoginPage;