import { Add, Cancel, DeleteOutline, Search } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Notes.css";

const Notes = ({ notes, setNotes, style }) => {

  // States
  const [searchParams, setSearchParams] = useSearchParams();
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [timeoutt, setTimeoutt] = useState("");
  const [deleted, setDeleted] = useState("");
  const [timer, setTimer] = useState("");
  const [timerr, setTimerr] = useState("");

  //useNavigate
  const navigate = useNavigate()

  // Handler
  function handleDelete(id) {
    setDeleteAlert(true);

    //Delete timer
    setTimer(7);
    const timer = setInterval(() => {
      setTimer((prev) => prev - 1);
      setTimerr(timer);
    }, 1000);

    //Delaye delete for 7secs
    const timeout = setTimeout(() => {
      setNotes(notes.filter((note) => note.id !== id));
      setDeleteAlert(false);
      setDeleted("Note deleted successfully");
    }, [7000]);

    //Clear timeout for delete
    setTimeoutt(timeout);
  }
  const handleUndoDelete = () => {
    //Undo a delete process
    clearTimeout(timeoutt);
    setDeleteAlert(false);
  };

  //Date
  const date = new Date().toLocaleDateString();

  const handleTitleSearch = (e) => {
    e.preventDefault();
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter: filter, y: "true" });
    } else {
      setSearchParams({});
    }
  };

  //UseEffects
  useEffect(() => {
    //Handle successful delete message
    const interval2 = setTimeout(() => {
      setDeleted("");
      clearTimeout(interval2);
    }, 10000);
  }, [deleteAlert]);
  useEffect(() => {
    if (timer < 1) {
      //Clear timer function
      setTimer("");
      clearInterval(timerr);
    }
  }, [timer, timerr]);

  useEffect(() => {
    localStorage.setItem("savedNote", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="noteWrapper">
      <div className="noteForm-div" style={{position: style?"sticky":""}}>
        <form className="noteSearchForm">
          <input
            type="text"
            placeholder="Search note by title"
            onChange={handleTitleSearch}
          />
        </form>
        <Search className="noteSearch" />
      </div>
      <div className="noteTotal-add">
        <h2 className="noteTotal">Total: <div className="noteLength">{notes.length}</div></h2>
        <Add className="noteAdd" onClick={() => navigate('/createNotes')}/>
      </div>
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
              <div className="noteDiv" key={note.id}>
                <ul className="noteTitleDeleteDiv">
                  <div className="noteTitle-text">
                    <div className="noteGrid">
                      <li className="noteTitle">{note.noteTitle}</li>
                    </div>
                    <li className="noteText">{note.noteText}</li>
                    <li className="noteTitle" id="noteTitle">
                      {date}
                    </li>
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
      <div
        style={{ display: deleteAlert ? "flex" : "none" }}
        className="noteDelete-alert"
      >
        <h2>Note deleting...</h2>
        <h2 onClick={handleUndoDelete}>
          Undo <Cancel /> <span>{timer}</span>
        </h2>
      </div>
      <h2
        className="noteDelete-alert"
        id="noteDelete-alert"
        style={{ display: deleted !== "" ? "flex" : "none" }}
      >
        {deleted}
      </h2>
    </div>
  );
};
export default Notes;
