import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import './styles/main.scss';


function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
};


export default App;
