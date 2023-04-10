import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/HomePage/Header'
import LoginPage from './Components/LoginPage/LoginPage';
import Book from './Books';

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
