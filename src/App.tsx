import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';

import { MainRouter, getRouteNames } from './router';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);

  const [routeNames, setRouteNames] = useState([]);

  useEffect(() => {
    const result = getRouteNames(MainRouter({ isLoggedIn: loggedIn }));
    console.log('🚀 ~ file: App.tsx ~ line 13 ~ useEffect ~ result', result);
    setRouteNames(result);
  }, [loggedIn]);

  return (
    <div className="app">
      <Navbar isLoggedIn={loggedIn} toggleLoggedIn={setIsLoggedIn} routes={routeNames} />
      <MainRouter isLoggedIn={loggedIn} />
    </div>
  );
}

export default App;
