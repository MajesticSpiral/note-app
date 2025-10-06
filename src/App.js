import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim() === "") return;
    setNotes([...notes, noteText]);
    setNoteText("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Notes</h1>
      <div className="input-container">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Enter your note"
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}{" "}
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
