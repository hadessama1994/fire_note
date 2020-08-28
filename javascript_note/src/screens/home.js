import React, { Fragment } from 'react';
import {Notification, Section, Navbar, Button} from 'rbx';

import Header from '../components/header/index'
import HomeScreen from '../screens/home/index'
import Footer from '../components/footer'
import Card from '../components/cards'
import Sobre from '../components/sobre'




const HomeIndex = () => (
  
   <div>
   
  
   <Header/>
   <HomeScreen/>
   <Card/>
   <Sobre/>
  <Footer/>

  </div>

  
   
 
)

export default HomeIndex;
