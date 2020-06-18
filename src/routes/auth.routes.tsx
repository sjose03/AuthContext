import React from 'react'
import SignIn from '../pages/SignIn'
import { Route } from 'react-router-dom'

const AuthRoutes:React.FC = () =>(
  <Route path='/' exact component={SignIn}></Route>
)

export default AuthRoutes