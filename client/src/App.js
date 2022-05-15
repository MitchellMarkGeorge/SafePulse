import './App.css';
import { Navigate, Route, Routes } from "react-router-dom"
import { ROUTES } from './services/routes';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';

import Loading from './components/Loading';
import NotFound from './pages/NotFound';
import SafeUse from './pages/SafeUse';
import SafetyCheck from './pages/SafetyCheck';
import SaveMe from './pages/SaveMe';

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // authentication based on this: https://css-tricks.com/user-registration-authentication-firebase-react/
  useEffect(() => {
    const unSubscriberFunction = onAuthStateChanged(auth, async (user) => {
      if (user) { 
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
      setIsLoading(false)
    })
    return unSubscriberFunction
  }, [])
  if (isLoading) {
    return <Loading/>
  } else {
  return ( 
    <AuthContext.Provider value={{userData, setUserData}}>
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing/>}/>
      <Route path={ROUTES.SAFETY_CHECK} element={<SafetyCheck/>}/>
      <Route path={ROUTES.SAVE_ME} element={<SaveMe/>}/>
  {/*  if not authenticated, got to login. otherwise, go to home page       */}
      <Route path={ROUTES.HOME} element={!isAuthenticated ?  <Navigate to={ROUTES.LOGIN}/> : <Home/>}/>
      <Route path={ROUTES.SAFE_USE} element={!isAuthenticated ?  <Navigate to={ROUTES.LOGIN}/> : <SafeUse/>}/>
  {/* if authenticated, go straing to the home page */}
      <Route path={ROUTES.LOGIN} element={isAuthenticated ? <Navigate to={ROUTES.HOME}/> :   <Login/>}/>
      <Route path={ROUTES.SIGNUP} element={isAuthenticated ? <Navigate to={ROUTES.HOME}/> :  <SignUp/> }/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   </AuthContext.Provider>
  );
}
}

export default App;
