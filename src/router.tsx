// @ts-nocheck
// we add a custom trait name

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Public from './components/pages/Public';

function PrivateRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/public" />;
}

const MainRouter = ({ isLoggedIn }: { isLoggedIn: boolean }) => (
  <Routes>
    <Route
      name="Home"
      path="/"
      protected={true}
      element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Home />
        </PrivateRoute>
      }
    />
    <Route path="/public" element={<Public />} />
  </Routes>
);

function getRouteNames(Routes) {
  try {
    function _capitalizeFirstLetter(string) {
      try {
        return string.charAt(0).toUpperCase() + string.slice(1);
      } catch (error) {
        console.log('🚀 ~ file: router.tsx ~ line 22 ~ capitalizeFirstLetter ~ error', error);
        return string;
      }
    }

    const routes = Routes.props.children;
    return routes.map((route) => ({
      name: _capitalizeFirstLetter(route.props.name || route.props.path.replace('/', '')),
      path: route.props.path,
      protected: !!route.props.protected,
    }));
  } catch (error) {
    console.warn('🚀 ~ file: router.tsx ~ line 19 ~ getRouteNames ~ error', {
      error,
      Routes: RoutesFn,
    });
    return [];
  }
}

export { MainRouter, getRouteNames };
