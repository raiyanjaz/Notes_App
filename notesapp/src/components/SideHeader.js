function SideHeader(props) {
  return (
    <div className="app-sideHeader">
      <div className="sideHeader-header">
        <button className="profile" onClick={props.onClick}> P </button>
      </div>
    </div>
  )    
}

export default SideHeader;