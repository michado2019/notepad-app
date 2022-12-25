import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import './Notes.css'

const Notes = ({notes, setNotes}) => {
    
    // Handler
    function handleDelete(id){
      setNotes(notes.filter(note => note.id !== id))
    }
    const notesArray = notes.map(note => {
        return (
            <div key={note.id} className='noteDiv'>
                <div className='noteTitleDeleteDiv'>
                <h2 className='noteTitle'>{note.noteTitle}</h2>
                <DeleteOutline className='deleteIcon' onClick={() => handleDelete(note.id)}/>
                </div>
                <p className='noteText'>{note.noteText}</p>
            </div>
        )
    })
  return (
    <div className='notesWrapper' key={notesArray}>
        {notesArray}
    </div>
  )
}

export default Notes