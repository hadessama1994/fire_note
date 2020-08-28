import React, { Fragment, useState} from 'react';
import HeaderLogged from '../../components/header/header_notas'
import Notes from './index/notes'
import Footer from '../../components/footer'


const NotesScreen = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  return(
<Fragment>
  <HeaderLogged setIsOpen={setIsOpen}/>
  <Notes setIsOpen={setIsOpen} isOpen={isOpen}/>
  <Footer setIsOpen={setIsOpen} isOpen={isOpen}/>
</Fragment>

)}

export default NotesScreen;