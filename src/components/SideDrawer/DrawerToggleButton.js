import react from "react";
import './DrawerToggleButton.css'

const DrawerToggleButton = props => {
    return(
            <button className="buttonToggle" >
                <div className="toggle-button_line" ></div>
                <div className="toggle-button_line" ></div>
                <div className="toggle-button_line" ></div>
            </button>
    )
    
}

export default DrawerToggleButton