import React, { useState } from "react";
import "./CreateNotes.css";
import uniqid from 'uniqid'
const CreateNotes = ({setNotes}) => {

  // State
  const [id, setId] = useState(uniqid())
  const [style, setStyle] = useState(false)
  const [form, setForm] = useState({
    noteTitle: "",
    noteText: "",
  });

  // Handler
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value, id
    });
  };
  const addNotes = (e) => {
    if(form.Title !== '' && form.Text !== ''){
        setId(uniqid())
        e.preventDefault();
            setNotes(notes => [...notes, form])
            setStyle(true)
    }
    setForm({
      noteTitle: "",
      noteText: "",
    })
  }
  return (
    <div className="createNotesWrapper">
      <form className="createNotesForm" onSubmit={addNotes}>
        {
          style ?
          <h2 className="createNotesTitle">Note saved successfully!</h2> :
          <h2 className="createNotesTitle">Create notes</h2>
        }
        <label className="createNotesLabel">Note title</label>
        <input
          type="text"
          className="createNotesInput"
          placeholder="Enter note title"
          onChange={handleChange}
          name="noteTitle"
          value={form.noteTitle}
          required
        />
        <label className="createNotesLabel">Note text</label>
        <input
          type="text"
          className="createNotesInput"
          placeholder="Enter note text"
          onChange={handleChange}
          name="noteText"
          value={form.noteText}
          required
        />
        <button className="createNotesBtn">Add Note</button>
      </form>
    </div>
  );
};
export default CreateNotes;