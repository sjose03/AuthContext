import React from 'react'
import Dashboard from '../pages/Dashboard'
import { Route } from 'react-router-dom'

const AppRoutes:React.FC = () =>(
  <Route component={Dashboard}></Route>
)

export default AppRoutes