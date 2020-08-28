import React, { Fragment, useState, error} from 'react';
import {Card, Container, Column,  Section,Title, Image, Control, Input, Icon, Button, Field, Help } from 'rbx'
import "../../../styles/home.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faHeart, faRetweet,faInfoCircle, faCheck, faLock, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import {Redirect} from 'react-router-dom'
import UsersService from '../../../services/users'




function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  if(redirectToLogin)
    return <Redirect to={{pathname: "/login"}}/>



    //lidando com eventos
    const HandleSubmit = async (evt) => {
        evt.preventDefault();
    
        try {
            await UsersService.register({name: name, email:email, password: password})
            setRedirectToLogin(true)
        } catch (error) {
            setError(true);
        }

    }

return (

<> 
<form onSubmit={HandleSubmit}>
<Field >
  <Control iconLeft iconRight>
        <Input 
    type="Name" 
    placeholder="Nome" 
    value={name}
    onChange={e => setName(e.target.value)}/>

    <Icon size="small" align="left">
      <FontAwesomeIcon icon={faUser} />
    </Icon>    
    <Icon size="small" align="right">
      <FontAwesomeIcon icon={faCheck} />
    </Icon>
  </Control>
</Field>
    <Field >
  <Control iconLeft iconRight>
   
    <Input 
    type="email"
    placeholder="Email"
    value={email}
    onChange={e => setEmail(e.target.value)} />

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
    placeholder="Senha"
    value={password}
    onChange={e => setPassword(e.target.value)} />
    <Icon size="small" align="left">
      <FontAwesomeIcon icon={faLock} />
    </Icon>
  </Control>
</Field>
    <Field>
  <Control>
    <Button color="success">Registrar</Button>
  </Control>
</Field>

<Column></Column>
<a onClick={e=> setRedirectToLogin(true)}><Title size={6} subtitle>Se já possui uma conta faça <strong>login</strong>. </Title></a>
</form>
{error && <Help color="danger">Email ou senha inválidos</Help>}
</>

)
}

export default RegisterForm