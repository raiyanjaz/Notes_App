import {useState} from "react"

import './styles/App.css';
import './styles/ProfileView.css'

import ProfileView from "./components/ProfileView";
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SideHeader from "./components/SideHeader";

function App() {
  
  // Opening the profile view
  const [openProfileView , setProfileView] = useState(false);

  const profileViewOpen = () => setProfileView(true);   
  

  // Adding notes in the note sidebar
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: Math.random() * 100,
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  // Updating notes in the note sidebar
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  // Deleting notes in the note sidebar
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  if (openProfileView) { // When profile picture is clicked, only sideheader and profile view will be open
    return (
      <div className="App">
        <SideHeader 
          onClick={profileViewOpen}
        />
        <ProfileView />
      </div>
    )
  } 

  return (
    <div className="App">
      <SideHeader 
        onClick={profileViewOpen}
      />
      <Sidebar 
        notes={notes} 
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main 
        activeNote={getActiveNote()} 
        onUpdateNote={onUpdateNote}
      />
    </div>
  )
  
}

export default App;