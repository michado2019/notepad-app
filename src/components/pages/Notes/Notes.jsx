import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import './Notes.css'

const Notes = ({notes}) => {

    const notesArray = notes.map(note => {
        return (
            <div key={note} className='noteDiv'>
                <div className='noteTitleDeleteDiv'>
                <h2 className='noteTitle'>{note.noteTitle}</h2>
                <DeleteOutline className='deleteIcon' />
                </div>
                <p className='noteText'>{note.noteText}</p>
            </div>
        )
    })
  return (
    <div className='notesWrapper'>
        {notesArray}
    </div>
  )
}

export default Notes