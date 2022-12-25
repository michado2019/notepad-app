import React, { useState } from "react";
import "./CreateNotes.css";

const CreateNotes = ({setNotes}) => {

  // State
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
      [name]: value,
    });
  };
  const addNotes = (e) => {
    e.preventDefault();
        setNotes(notes => [...notes, form])
  }
  return (
    <div className="createNotesWrapper">
      <form className="createNotesForm" onSubmit={addNotes}>
        <h2 className="createNotesTitle">Create notes</h2>
        <label className="createNotesLabel">Note title</label>
        <input
          type="text"
          className="createNotesInput"
          placeholder="Enter note title"
          onChange={handleChange}
          name="noteTitle"
          value={form.noteTitle}
        />
        <label className="createNotesLabel">Note text</label>
        <input
          type="text"
          className="createNotesInput"
          placeholder="Enter note text"
          onChange={handleChange}
          name="noteText"
          value={form.noteText}
        />
        <button className="createNotesBtn">Add Note</button>
      </form>
    </div>
  );
};

export default CreateNotes;
