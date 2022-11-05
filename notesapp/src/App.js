import './app.css';
import Header from './components/header'
import NotesList from './pages/notesListPage'

function App() {
  return (
    <div className="App">
      <Header />
      <NotesList />
    </div>
  )
}

export default App;
