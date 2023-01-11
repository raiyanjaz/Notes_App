function Header(props) {
  return (
    <header className="main-header">
      <ul>
        <li> <button className="notes-button"> Notes </button> </li>
        <li> <button className="tasks-button"> Tasks </button> </li>
        <li> <button className="profile-button" onClick={props.onClick}> Profile </button> </li>
      </ul>
    </header>
  )
}

export default Header;