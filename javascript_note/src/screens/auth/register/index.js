import React, { Fragment, error} from 'react';
import {Card, Container, Column,  Section,Title, Image, Help, Control, Input, Icon, Button, Field } from 'rbx'
import "../../../styles/home.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faHeart, faRetweet,faInfoCircle, faCheck, faLock, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import RegisterForm from '../register_form'



const RegisterScreen = () => (


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

          
  <Column.Group>
    <Column size={12}>
      <Title size={6} className="has-text-grey has-text-centered">
        Suas notas rápidas
      </Title>
    </Column>
  </Column.Group>
  </Section>

    <RegisterForm/>



         
          </Card.Content>
        </Card>
      </Column>
    </Column.Group>
  </Container>
</Section>


);

export default RegisterScreen;