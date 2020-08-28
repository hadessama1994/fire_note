import React, {useState} from 'react';
import {Navbar, Container, Button, Title} from 'rbx'
import {Link} from 'react-router-dom'
import UserService from '../../services/users'





function Header(){

 
  const [RedirectToNewHeader, setRedirectToNewHeader] = useState(false);
  let userLogged= localStorage.getItem('user')
  
  


  async function logOUT(){
    await UserService.logout()
  }

  if (userLogged){
    let userName = JSON.parse(localStorage.getItem('user')).name
    return (<Navbar color="dark">
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
  
  
else //navbar padrao
{ 


    return(
        <Navbar color="dark">
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
      <Navbar.Item>
        <Button.Group>
        <a href="/register"> <Button color="primary"> 
           <strong>Registrar</strong>
          </Button></a>

           <a href="/login" className='a'><Button color="light">Logar</Button></a>
        </Button.Group>
      </Navbar.Item>
    </Navbar.Segment>
  </Navbar.Menu>
  </Container>
</Navbar>

    )
}
}

export default Header