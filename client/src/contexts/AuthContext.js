import React, {useContext} from 'react'

export const AuthContext = React.createContext()


export function useAuthContext() {
  return useContext(AuthContext)
}