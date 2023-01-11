function Header(notes, tasks, profile) {
  return (
    <header className="main-header">
      <ul>
        <li> <button className="notes-button" onClick={tasks.notesClick}> Notes </button> </li>
        <li> <button className="tasks-button" onClick={tasks.taskClick}> Tasks </button> </li>
        <li> <button className="profile-button" onClick={profile.profileClick}> Profile </button> </li>
      </ul>
    </header>
  )
}

export default Header;