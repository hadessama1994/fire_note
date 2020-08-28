import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './screens/home.js'
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'
import PrivateRouter from './screens/auth/private_router'


const Routes = () =>(
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/register' component={RegisterScreen} />
      <Route exact path='/login' component={LoginScreen} />
      <PrivateRouter exact path='/notes' component={NotesIndexScreen} />
      <PrivateRouter exact path='/users/edit' component={UserEditScreen} />
            
            </Switch>
    </BrowserRouter>
)


export default Routes