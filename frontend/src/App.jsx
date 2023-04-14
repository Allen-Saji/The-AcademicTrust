import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Homepage/Header'
import LoginPage from './Pages/Login/LoginPage';
import About from './Pages/About/About';
import StudentHeader from './Pages/StudentLogin/StudentHeader';

function App() {
 
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/studentlogin' element={<StudentHeader />} />
      </Routes>
    </Fragment>
  );
};

export default App
