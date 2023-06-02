import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Pages/Homepage/Header";
import About from "./Pages/About/About";
import StudentLoginPage from "./Pages/Login/StudentLogin/StudentLoginPage";
import UniversityLoginPage from "./Pages/Login/UniversityLogin/UniversityLoginPage";
import EmployerLoginPage from "./Pages/Login/EmployerLogin/EmployerLoginPage";
import StudentHomepage from "./Pages/StudentModule/StudentHomepage";
import UniversityHomepage from "./Pages/UniversityModule/UniversityHomepage";
import EmployeeHomepage from "./Pages/EmployeeModule/EmployeeHomepage";
import StudentHome from "./Pages/StudentModule/StudentHome";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/student/login" element={<StudentLoginPage />} />
        <Route path="/admin/login" element={<UniversityLoginPage />} />
        <Route path="/organization/login" element={<EmployerLoginPage />} />

        <Route path="/student/:result" element={<StudentHomepage />} />

        <Route path="/admin/homepage" element={<UniversityHomepage />} />
        <Route path="/organization/homepage" element={<EmployeeHomepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
