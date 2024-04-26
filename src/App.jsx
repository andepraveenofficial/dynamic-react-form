import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import { auth } from './Authentication/firebase';
import Home from './Pages/Home';
import Login from './Pages/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
        navigate("/")
      } else {
        setIsAuthenticated(false);
        navigate("/login")
      }
    });

    return () => unsubscribe();
    
  }, []);

  console.log(isAuthenticated) 

  if (isAuthenticated === null ) return 
 ( 
 <div className='h-screen flex justify-center items-center'>
    <h1>...Loading</h1>
  </div>
  )

  return ( 
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
