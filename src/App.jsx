import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from './context/context';

import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

import './styles/main.scss';
import './styles/header.scss';


function App() {
  const [ isAuth, setIsAuth ] = useState(false);

  return (
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>

          <div className='container'>
            <NavBar/>
            <AppRouter/>
          </div>

        </BrowserRouter>
    </AuthContext.Provider>
  );
};


export default App;
