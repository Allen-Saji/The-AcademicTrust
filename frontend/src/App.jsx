import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Homepage/Header'
import LoginPage from './Pages/Login/LoginPage';

function App() {
 
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
};

export default App
