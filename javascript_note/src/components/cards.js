import React from 'react';
import {Content, Title, Card, Level,Icon, Media, Image, Box, Column, Notification} from 'rbx';
import "../styles/home.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faHeart, faRetweet,faInfoCircle} from '@fortawesome/free-solid-svg-icons'

function cards(){
    return(

      

      <div className="footer">
        <Title size="5" className="minititle"  align ="center"><strong>Qualidades</strong></Title>

      <Column.Group>
 
        
      <div  className="cards">
      <div className="container1" >
        <Icon className="icone" color="light">
      <FontAwesomeIcon icon={faHome} size="4x"  /></Icon>
      <Title className="Title" size="5" >Robustez</Title>
      <Title  subtitle className="Title">Armazene suas anotações de forma segura.</Title>
      </div>
    </div>
    

    

    <div  className="cards">
      <div className="container1">
        <Icon className="icone" color="light">
      <FontAwesomeIcon icon={faHeart} size="4x"  /></Icon>
      <Title className="Title" size="5" >Praticidade</Title>
      <Title subtitle className="Title">Crie notas de forma prática.</Title>
      </div>
    </div>
    

    

    <div  className="cards" >
      <div className="container1">
        <Icon className="icone" color="light">
      <FontAwesomeIcon icon={faRetweet} size="4x"  /></Icon>
      <Title className="Title" size="5" >Agilidade</Title>
      <Title subtitle className="Title">Crie suas notas e acesse elas de forma rápida e prática.</Title>
      </div>
    </div>

    <div  className="cards" >
      <div className="container1">
        <Icon className="icone" color="light">
      <FontAwesomeIcon icon={faInfoCircle} size="4x"  /></Icon>
      <Title className="Title" size="5" >Facilidade</Title>
      <Title subtitle className="Title">Design friendly para que você possa acessar e criar notas sem se perder. </Title>
      </div>
    </div>
   
   
    
    </Column.Group>
    </div>




    


    )}


    export default cards
