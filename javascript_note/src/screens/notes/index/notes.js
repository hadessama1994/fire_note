import React, {useState, Fragment, useEffect, props} from 'react'

import {push as Menu} from 'react-burger-menu'
import {Column, Button} from 'rbx'
import HeaderNotas from '../../../components/header/header_notas'
import List from '../list/list'
import Editor from '../editor'
import Search from '../search'
import NoteService from '../../../services/note'


function Notes(props) {

  const [notes, setNotes] = useState([])
  const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });
  
  
  
  async function fetchNotes() {  
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
       
    }
    else {
      setNotes([])
      
    }
  }

  const searchNotes = async (query) =>{
    const response = await NoteService.search(query);
    setNotes(response.data)

  }

  const createNote = async() => {
    await NoteService.create()
    fetchNotes()
    
  }

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NoteService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  }

  const deleteNote = async(note) => {
    await NoteService.delete(note._id)
    fetchNotes()
  }

  const selectNote = (id) => {
    const note= notes.find((note) => {
      return note._id == id;
    })
    setCurrentNote(note)
    
  }

  useEffect(() => {
    fetchNotes();
    
        
  }, []);

 
  
  return(
    <Fragment>
      <div className="notes" id="notes">
        <Menu 
          pageWrapId={"notes-editor"} 
          isOpen={ props.isOpen }
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus 
          outerContainerId={"notes"}
          customBurgerIcon={ false }
          customCrossIcon={ false }
        
        >
           <Column.Group>
            <Column size={10} offset={1}>
            <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
            </Column>
          </Column.Group>

         <List
            notes={notes}
            createNote={createNote}
            selectNote={selectNote}            
            current_note={current_note} 
            deleteNote={deleteNote}
            
            />

           

        </Menu>


        <Column size={12} className="notes-editor" id="notes-editor">
          <Editor note ={current_note}
          updateNote={updateNote}/>
          
        </Column>
      </div>
    </Fragment>
  )
}

export default Notes