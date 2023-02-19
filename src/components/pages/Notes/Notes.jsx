import { DeleteOutline } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Notes.css";

const Notes = ({ notes, setNotes }) => {
  // States
  const [searchParams, setSearchParams] = useSearchParams();

  // Handler
  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }
  const handleTitleSearch = (e) => {
    e.preventDefault();
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter: filter, y: "true" });
    } else {
      setSearchParams({});
    }
  };
  // useEffect
  useEffect(() => {
    localStorage.setItem("savedNote", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="noteWrapper">
      <form className="noteSearchForm">
        <input
          type="text"
          placeholder="Search note by title"
          onChange={handleTitleSearch}
        />
      </form>
      <div className="noteGrid">
        {notes
          .filter((note) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let noteTitle = note.noteTitle.toUpperCase();
            return noteTitle.includes(filter.toUpperCase());
          })
          .map((note) => {
            return (
              <div className="noteDiv">
                <ul className="noteTitleDeleteDiv">
                  <div>
                    <div className="noteGrid">
                      <li className="noteTitle">{note.noteTitle}</li>
                    </div>
                    <li className="noteText">{note.noteText}</li>
                  </div>
                  <DeleteOutline
                    className="deleteIcon"
                    onClick={() => handleDelete(note.id)}
                  />
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Notes;
