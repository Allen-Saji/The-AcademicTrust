import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Homepage/Header'
import About from './Pages/About/About';
import StudentHeader from './Pages/StudentModule/StudentHeader';
import StudentLoginPage from './Pages/Login/StudentLogin/StudentLoginPage';
import UniversityLoginPage from './Pages/Login/UniversityLogin/UniversityLoginPage';
import EmployerLoginPage from './Pages/Login/EmployerLogin/EmployerLoginPage';

function App() {
 
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/StudentLogin' element={<StudentLoginPage />} />
        <Route path='/UniversityLogin' element={<UniversityLoginPage />} />
        <Route path='/EmployerLogin' element={<EmployerLoginPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/studentlogin' element={<StudentHeader />} />
      </Routes>
    </Fragment>
  );
};

export default App
