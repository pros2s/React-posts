import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import './styles/main.scss';
import './styles/header.scss';


function App() {
  return (
    <BrowserRouter>
      <Link className='header-link' to='/'>
        <h1>Posts</h1>
      </Link>

      <div className='container'>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
};


export default App;
