import React, {useContext} from 'react'
import AuthContext from '../../contexts/auth' 
const Dashboard:React.FC = () =>{
  
  const { signOut } = useContext(AuthContext)

  async function handleSignOut(){
    signOut()   
  }
  return(

  <div>
    <h1>DashBoard</h1>
    <button type='button' onClick={handleSignOut}>Logout</button>
  </div>
  )
}

export default Dashboard