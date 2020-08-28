import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const privateRouter = ({component: Component, ...rest}) => (
    <Route {...rest} render={props=>(
        localStorage.getItem('user')
        ? <Component {...props} />  : <Redirect to = {{pathname: '/login'}}/>

    )}/>
)


export default privateRouter