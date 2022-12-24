function SideHeader(props) {
  return (
    <div className="app-sideHeader">
      <div className="sideHeader-header">
        <button className="profile" onClick={props.onClick} />
				<hr />
      </div>
    </div>
  )    
}

export default SideHeader;