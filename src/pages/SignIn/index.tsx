import React, {useContext} from 'react'
import AuthContext from '../../contexts/auth'
const SignIn:React.FC = () =>{
  
  
  const { signed , signIn,user } = useContext(AuthContext)
  console.log(signed)
  console.log(user)
  async function handleSignin(){
    signIn()   
  }
  return(

  <div>
    <h1>SignIn</h1>
    <button type='button' onClick={handleSignin}>SignIn</button>
  </div>
  )
}

export default SignIn