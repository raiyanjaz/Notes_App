import { useState } from "react";
import ProfileView from "./ProfileView";
import '../ProfileView.css'


function SideHeader() {
    const [openprofileView , setprofileView] = useState(false);
    
    function profileViewOpen() {
        setprofileView(true);
    }

    return (
        <div className="app-sideHeader">
            <div className="sideHeader-header">
                <button className="profile" onCLick={profileViewOpen}> P </button>
            </div>
            {openprofileView && <ProfileView />}
        </div>
        
    )

    
}

export default SideHeader;