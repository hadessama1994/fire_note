import React, { Fragment} from 'react';
import {Card, Container, Column,  Section,Title, Image, Control, Input, Icon, Button, Field } from 'rbx'
import "../../../styles/home.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faHeart, faRetweet,faInfoCircle, faCheck, faLock, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import LoginForm from '../../../screens/auth/login_form/'
const LoginScreen = () => (


<Section size="medium" className="auth">
  <Container>
    <Column.Group centered>
      <Column size={3}>
        <Card>
          <Card.Content>

<Section>
       <Column.Group centered>
            <Column size="5">
            <Image.Container centered size={62}>
            <img 
        src="https://image.flaticon.com/icons/png/512/1614/1614199.png"      
             />
       </Image.Container>
            </Column>
          </Column.Group>

          
 
  </Section>

  <LoginForm/>

   
<a className="aLogin" href="/register"><Title size={6} subtitle>Ainda não tem conta? <strong>Crie uma!</strong> </Title></a>



    

            
         
          </Card.Content>
        </Card>
      </Column>
    </Column.Group>
  </Container>
</Section>


);

export default LoginScreen;