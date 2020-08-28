import React, {Section} from 'react';
import {Content, Title, Card, Level,Icon, Media, Image, Box, Column, Notification, Tile, Hero, Container} from 'rbx';
import "../styles/home.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faHeart, faRetweet,faInfoCircle} from '@fortawesome/free-solid-svg-icons'

function sobre(){
    return(

      
<Column.Group gapSize={0}>
  
  <Column>
  <Hero color="white" size="fullheight-with-navbar">
        <Hero.Body>
          <Container>

          <Image.Container>
            <Image 
              src={`https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg`}
            />
          </Image.Container>
                   
          </Container>
        </Hero.Body>
      </Hero>
  </Column>

  <Column size="half">
  <Hero color="primary" size="medium">
        <Hero.Body>
        
          <Container textAlign="Left">
            <Title size ="1">Sobre.</Title>
            <hr class="hr" />

            

            <Title subtitle textAlign = "left" className="bodyText" size="3">
            Somos uma empresa de criação de programas Full Stack, ultilizando JS e libs e frameworks como React, NodeJD e React Native.</Title>
          </Container>
        </Hero.Body>
      </Hero>
  </Column>

</Column.Group>


    )}


    export default sobre
