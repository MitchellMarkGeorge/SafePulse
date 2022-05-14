import React, {useContext} from 'react'

const AuthContext = React.createContext()

export function AuthProvider({children, user}) {
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthUser() {
  return useContext(AuthContext)
}