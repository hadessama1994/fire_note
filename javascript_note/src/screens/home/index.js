import React, {Fragment, OptionBlock,COLUMN_DEFAULTS, Section} from 'react'
import Header from '../../components/header'
import {Column, Notification, Container, Title, Hero, Tile, Image, Content, Box, Divider} from 'rbx'
import "../../styles/home.scss";
import homeicon from '../../assets/images/home.png'

const HomeScreen = ()=>(
    

<div>

<Column.Group gapSize={0}>
  <Column size="three-fifths">
  <Hero color="primary" size="fullheight-with-navbar">
        <Hero.Body>
        
          <Container textAlign="Left">
            <Title size ="1">Suas notas.<br></br> Organizadas.<br></br>  Sem esforço.</Title>
            <hr class="hr" />

            

            <Title subtitle textAlign = "left" className="bodyText" size="3">
            Faça anotações em qualquer lugar. Encontre informações mais rapidamente. Compartilhe ideias com qualquer pessoa. Notas de reunião, páginas da web, projetos, listas de tarefas — com o Evernote como seu aplicativo de anotação, nada escapa das suas mãos.</Title>
          </Container>
        </Hero.Body>
      </Hero>
  </Column>
  <Column>
  <Hero color="white" size="fullheight-with-navbar">
        <Hero.Body>
          <Container>

          <Image.Container size="128">
            <Image
              src={homeicon}
            />
          </Image.Container>
                   
          </Container>
        </Hero.Body>
      </Hero>
  </Column>
</Column.Group>
      </div>




)


export default HomeScreen