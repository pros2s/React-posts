import { Navigate } from 'react-router-dom';

import About from '../../../pages/About';
import Error from '../../../pages/Error';
import Posts from '../../../pages/Posts';
import Post from '../../../pages/Post';
import Login from '../../../pages/Login';


export const privateRoutes = [
  { path: '/posts', element: <Posts/>, exact: true },
  { path: '/posts/:id', element: <Post/>, exact: true },
  { path: '/about', element: <About/>, exact: true },

  { path: '/error', element: <Error/>, exact: true },
  { path: '/login', element: <Navigate replace to='/'/>, exact: true },

  { path: '/', element: <Navigate replace to='/posts'/>, exact: true },
  { path: '*', element: <Error/>, exact: true }
];

export const publicRoutes = [
  { path: '/login', element: <Login/>, exact: true },
  { path: '/error', element: <Error/>, exact: true },
  { path: '*', element: <Login/>, exact: true }
];
