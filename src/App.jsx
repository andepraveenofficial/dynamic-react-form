import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { auth } from './Authentication/firebase';
import Home from './Pages/Home';
import Login from './Pages/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ isAuthenticated ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
