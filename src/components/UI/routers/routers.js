import { Navigate } from 'react-router-dom';

import About from '../../../pages/About';
import Error from '../../../pages/Error';
import Posts from '../../../pages/Posts';
import Post from '../../../pages/Post';


export const routerArray = [
  { path: '/posts', element: <Posts/>, exact: true },
  { path: '/posts/:id', element: <Post/>, exact: true },
  { path: '/about', element: <About/>, exact: true },
  { path: '/error', element: <Error/>, exact: true },
  { path: '/', element: <Navigate replace to='/posts'/>, exact: true },
  { path: '*', element: <Error/>, exact: true }
];
