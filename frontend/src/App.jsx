import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Pages/Homepage/Header";
import About from "./Pages/About/About";
import StudentLoginPage from "./Pages/Login/StudentLogin/StudentLoginPage";
import UniversityLoginPage from "./Pages/Login/UniversityLogin/UniversityLoginPage";
import EmployerLoginPage from "./Pages/Login/EmployerLogin/EmployerLoginPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/student/login" element={<StudentLoginPage />} />
        <Route path="/university/login" element={<UniversityLoginPage />} />
        <Route path="/employer/login" element={<EmployerLoginPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
