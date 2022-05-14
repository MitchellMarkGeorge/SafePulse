import './App.css';
import { Navigate, Route, Routes } from "react-router-dom"
import { ROUTES } from './services/routes';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { useEffect, useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import Loading from './components/Loading';

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  // authentication based on this: https://css-tricks.com/user-registration-authentication-firebase-react/
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIsAuthenticated(true)
  //       setUser(user)
  //     } else {
  //       setIsAuthenticated(false)
  //     }
  //     setIsLoading(false)
  //   })
  // }, [])
  if (isLoading) {
    return <Loading/>
  } else {
  return ( 
    <AuthProvider user={user}>
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing/>}/>
  {/*  if not authenticated, got to login. otherwise, go to home page       */}
      <Route path={ROUTES.HOME} element={!isAuthenticated ?  <Navigate to={ROUTES.LOGIN}/> : <Home/>}/>
  {/* if authenticated, go straing to the home page */}
      <Route path={ROUTES.LOGIN} element={isAuthenticated ? <Navigate to={ROUTES.HOME}/> :   <Login/>}/>
      <Route path={ROUTES.SIGNUP} element={isAuthenticated ? <Navigate to={ROUTES.HOME}/> :  <SignUp/> }/>
    </Routes>
    </AuthProvider>
  );
}
}

export default App;
