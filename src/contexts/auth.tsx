import React,{ createContext,useState,useEffect } from 'react'
import * as auth from '../services/auth'

interface AuthContextData{
  signed:boolean;
  user:object | null ;
  signIn():Promise<void>
  signOut():void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider:React.FC = ({children}) => {

  const [loading,setLoading] = useState(true)
  const [user,setUser] = useState<object | null>(null)

  useEffect(()=>{
    function loadStorageData(){
      const storageUser = localStorage.getItem('user')
      const storageToken = localStorage.getItem('token')

      if(storageToken && storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
    }
    loadStorageData()
  })

  async function signIn(){
   const response =  await auth.signIn()
   setUser(response.user)
   localStorage.setItem('user',JSON.stringify(response.user))
   localStorage.setItem('token',JSON.stringify(response.token))
   
  }

   function signOut(){
    setUser(null)
    localStorage.clear()
  }
  

  return(

  <AuthContext.Provider value={{signed:!!user,user,signIn,signOut}}>
    {children}
  </AuthContext.Provider>
  )
}


export default AuthContext