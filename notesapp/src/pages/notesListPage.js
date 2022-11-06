import React from 'react'
import ListItem from '../components/listItems'
import notes from '../assets/data'

const notesListPage = () => {
  return (
    <div>
        <div className = "notes-list">
          {notes.map(note => (
            <p> {note.body} </p>
          ))}
        </div>
        <ListItem />
    </div>
  )
}

export default notesListPage