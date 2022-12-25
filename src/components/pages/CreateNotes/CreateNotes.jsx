import React from 'react'
import './CreateNotes.css'

const CreateNotes = () => {
  return (
    <div className='createNotesWrapper'>
        <form className='createNotesForm'>
            <h2 className='createNotesTitle'>Create notes</h2>
            <label className='createNotesLabel'>Note title</label>
            <input type='text' className='createNotesInput' placeholder='Enter note title'/>
            <label className='createNotesLabel'>Note text</label>
            <input type='text' className='createNotesInput' placeholder='Enter note text'/>
            <button className='createNotesBtn'>Add Note</button>
        </form>
    </div>
  )
}

export default CreateNotes