import { useState } from "react"

import './styles/App.css';
import './styles/Header.css'
import './styles/ProfileView.css'
import './styles/LogInView.css'

import ProfileView from "./components/ProfileView";
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Header from "./components/Header";
import LogInView from './components/LogInView';
import TasksView from "./components/TasksView";

function App() {

  // Opening the note view
  const [openNotesView, setNotesView] = useState(false);
  const notesViewOpen = () => setNotesView(true);

  // Opening the task view
  const [openTasksView, setTasksView] = useState(false);
  const tasksViewOpen = () => setTasksView(true);

  // Opening the profile view
  const [openProfileView, setProfileView] = useState(false);
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
      if (note.id === activeNote) {
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

  // Returns Note View
  if (openNotesView) {
    return (
      <div className="App">
        <Header
          notesClick={notesViewOpen}
          tasksClick={tasksViewOpen}
          profileClick={profileViewOpen}
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

  // Returns Tasks View
  if (openTasksView) {
    return (
      <div className="App">
        <Header
          notesClick={notesViewOpen}
          tasksClick={tasksViewOpen}
          profileClick={profileViewOpen}
        />
        <TasksView />
      </div>
    )
  }

  // Returns Profile View
  if (openProfileView) {
    return (
      <div className="App">
        <Header
          notesClick={notesViewOpen}
          tasksClick={tasksViewOpen}
          profileClick={profileViewOpen}
        />
        <ProfileView />
      </div>
    )
  }

  return (
    <div className="App">
      <LogInView onClick={notesViewOpen} />
    </div>
  )
}

export default App;