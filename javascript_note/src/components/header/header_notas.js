import React, {useState, props} from 'react';
import {Navbar, Container, Button} from 'rbx'
import {Link} from 'react-router-dom'
import UserService from '../../services/users'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/free-solid-svg-icons'
import NoteService from '../../services/users'


function HeaderNotas(props)
{

  
  async function logOUT(){
    await UserService.logout()
  }

  let userName = JSON.parse(localStorage.getItem('user')).name
  return (
  
  <Navbar color="dark">
    <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
  <Navbar.Item as="div">
    <Button 
      className="open-button" 
      color="white" 
      outlined
      onClick={() => props.setIsOpen(true)}>
          <FontAwesomeIcon icon={faList} />
      </Button>
  </Navbar.Item>
</Navbar.Segment>

  <Container>
    
<Navbar.Brand>
<Navbar.Item href="/">
<img
src="https://image.flaticon.com/icons/png/512/1614/1614199.png"
alt=""
role="presentation"
width="28"
height="28"
/>
</Navbar.Item>
<Navbar.Burger />
</Navbar.Brand>
<Navbar.Menu>
<Navbar.Segment align="start">
<Navbar.Item href="/">Home</Navbar.Item>
<Navbar.Item href="/notes">Notas</Navbar.Item>

<Navbar.Item dropdown>
<Navbar.Link>Mais</Navbar.Link>
<Navbar.Dropdown>
<Navbar.Item href="/">Sobre</Navbar.Item>
<Navbar.Item href="/">Notas</Navbar.Item>
<Navbar.Item href="/">Contato</Navbar.Item>
<Navbar.Divider />
<Navbar.Item href="/">Reportar um problema</Navbar.Item>
</Navbar.Dropdown>
</Navbar.Item>
</Navbar.Segment>

<Navbar.Segment align="end">
<Navbar.Item >Olá, {userName}</Navbar.Item>
<Navbar.Item>
<Button.Group>

 <a href="/"  className='a'><Button  onClick={e => logOUT()} color="light">Logout</Button></a>
</Button.Group>
</Navbar.Item>
</Navbar.Segment>
</Navbar.Menu>
</Container>
</Navbar>)
}

export default HeaderNotas