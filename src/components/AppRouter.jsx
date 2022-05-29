import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from '../context/context';
import PostLoader from './UI/loader/PostLoader';
import { privateRoutes, publicRoutes } from './UI/routers/routers';


const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);


  if (isLoading) return <PostLoader/>
  
  return (
    isAuth
        ?
      (
        <Routes>
          {
            privateRoutes.map((router) => (
              <Route
                path={ router.path }
                element={ router.element }
                exact={ router.exact }
                key={ router.path }/>
            ))
          }
        </Routes>
      )
        :
      (
        <Routes>
          {
            publicRoutes.map((router) => (
              <Route
                path={ router.path }
                element={ router.element }
                exact={ router.exact }
                key={ router.path }/>
            ))
          }
        </Routes>
      )
  );
};


export default AppRouter;
