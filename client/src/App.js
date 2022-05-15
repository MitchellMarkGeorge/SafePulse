import './App.css';
import { Navigate, Route, Routes } from "react-router-dom"
import { ROUTES } from './services/routes';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { auth } from './services/firebase';
import Loading from './components/Loading';
import NotFound from './pages/NotFound';
import SafeUse from './pages/SafeUse';

function App() {
  // const [user, setUser] = useState(null)
  const [displayName, setDisplayName] = useState("")
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // authentication based on this: https://css-tricks.com/user-registration-authentication-firebase-react/
  useEffect(() => {
    const unSubscriberFunction = onAuthStateChanged(auth, async (user) => {
      if (user) { 

        // on login and sign up, try and get the user data and put it in the app context
        // page transitions 

        // signOut(auth)
        // console.log(user)
        // if (!user.displayName) {
        //   // if there is no displayname, then the account was just created from the signup page
        //   await updateProfile(auth.currentUser, {
        //     displayName
        //   })
        //   auth.currentUser.reload();
        //   console.log(auth.currentUser.displayName)
        // }
        setIsAuthenticated(true)
        // setUser(user)
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
    // might not be needed as
    <AuthContext.Provider value={{userData, setUserData}}>
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing/>}/>
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
