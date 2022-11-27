import {useState} from "react"
import './App.css';
import Sidebar from './sidebar.js';
import Main from './main.js';

function App() {
  const [notes, setNotes] = useState([])

  const onAddNote = () => {
    const newNote = {
      id: Math.random() * 100,
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  return (
    <div className="App">
      <Sidebar 
        notes={notes} 
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote} 
      />
      <Main />
    </div>
  )
}

export default App;
