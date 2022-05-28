import { Routes, Route } from 'react-router-dom';
import { routerArray } from './UI/routers/routers';


const AppRouter = () => {
  return (
    <Routes>
      {
        routerArray.map((router) => (
          <Route
            path={ router.path }
            element={ router.element }
            exact={ router.exact }
            key={ router.path }/>
        ))
      }
    </Routes>
  );
};


export default AppRouter;
