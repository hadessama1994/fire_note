import React, { Fragment } from 'react';
import { Button, Column, Tag, Title, List } from "rbx";
import Moment from 'moment';
import '../../../styles/home.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
 

function ListNotes(props) {
  return (
    <Fragment>

<Column size ={2}>
                    <Button 
                     color="primary"                    
                    onClick={()=> props.createNote()}>Nova Nota</Button>
                </Column>
            <Column></Column>
             <Column.Group breakpoint="mobile">
          
        <Column size={6} offset={1}>
        
          <Title size={6}>
          {props.notes.length} Notes
          </Title>
                

        </Column>
      </Column.Group>

      <Column>
      <List className="notes-list">
        {props.notes.map((item, key) =>
        <div className='lista'>
          <List.Item key={key} onClick={() => props.selectNote(item._id)} active={item == props.current_note}>
              
            <Title size={6}>
              {item.title.replace(/(<([^>]+)>)/ig, "").substring(0,15)}
            </Title>
            <Title size={6} subtitle spaced={false}>
              {item.body.replace(/(<([^>]+)>)/ig, "").substring(0,30)}
            </Title>

            <Column.Group breakpoint="mobile">
              <Column size={10}>
                <Tag color="dark">
                  {Moment(item.created_at).format('DD/MM')}
                </Tag>
              </Column>

               <Column size={2}>
                <FontAwesomeIcon 
                    icon={faTrash} 
                    onClick={() => props.deleteNote (item)}
                    color="grey"
                />
                </Column>
            </Column.Group>
            
          </List.Item>
          </div>
        )}
      </List>
      </Column>
    </Fragment>
  )
}

export default ListNotes;