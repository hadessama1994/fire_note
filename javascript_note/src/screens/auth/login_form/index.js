import React, { Fragment, useState,error} from 'react';
import {Card, Container, Column,  Section,Title, Image, Control, Input, Icon, Button, Field, Help } from 'rbx'
import "../../../styles/home.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faHeart, faRetweet,faInfoCircle, faCheck, faLock, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import {Redirect} from 'react-router-dom'
import UsersService from '../../../services/users'



function LoginForm(){

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [redirectToNotes, setRedirectToNotes] = useState(false)
const [Error, setError] = useState(false)

const HandleSubmit = async (evt) =>{
    evt.preventDefault();
    try {
        const  user = await UsersService.login({email: email, password: password})
       
        setRedirectToNotes(true)
        window.location.reload(false);
        
    } catch (error) {
        setError(true);
        
    }
}


if(redirectToNotes){
    return <Redirect to = {{pathname: "/notes"}}/>
}

    return(

        <>
        <form onSubmit = {HandleSubmit}>
        <Field >
        <Control iconLeft iconRight>
          <Input 
          type="email" 
          placeholder="Email"
          value = {email}
          onChange = {e=> {setEmail(e.target.value)}}/>
          <Icon size="small" align="left">
            <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
          
          <Icon size="small" align="right">
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control iconLeft>
          <Input 
          type="password" 
          placeholder="Password"
          value = {password}
          onChange = {e=> {setPassword(e.target.value)}}/>
          <Icon size="small" align="left">
            <FontAwesomeIcon icon={faLock} />
          </Icon>
        </Control>
      </Field>
      <Field>
        <Control>
          <Button color="success">Logar</Button>
        </Control>
      </Field>
      <Column></Column>
      </form>
      {error && <Help color="danger">Email ou senha inválidos</Help>}
      

      </>
    )
}


export default LoginForm