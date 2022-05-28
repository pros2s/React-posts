import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import About from './pages/About';
import Error from './pages/Error';
import Posts from './pages/Posts';


function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/posts' element={ <Posts/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/error' element={ <Error/> }/>

          <Route path='/' element={ <Navigate replace to='/posts'/> }/>
          <Route path='*' element={ <Error/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;
