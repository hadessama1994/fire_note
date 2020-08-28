import React, { Fragment, useEffect } from 'react';
import {Notification, Section, Navbar, Button} from 'rbx';
import './App.scss';
import Header from './components/header/index'
import Routes from './routes'
import Footer from './components/footer'
import Card from './components/cards'
import Sobre from './components/sobre'

// <Header/>
const App = () => {

    useEffect(()=>{
        document.title = "Fire Note App"
    }, [])

    return(
  
 <div> 
    
<Fragment><Routes/></Fragment>
  
</div>
 
)}

export default App;
