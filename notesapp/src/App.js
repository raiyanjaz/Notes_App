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
      lastModified: Date.now()
    };
  };

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main />
    </div>
  )
}

export default App;
