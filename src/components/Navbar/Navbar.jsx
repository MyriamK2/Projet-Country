import { useState } from "react";
import "./Navbar.css";


export default function Navbar({darkMode, setDarkMode}) {
    // //TODO ---------- States ----------

    const [mode, setMode] = useState("Dark mode");

    //TODO ---------- Comportements ----------

    const clickMode = () => {
        setDarkMode(!darkMode);

        if(darkMode == false) {
            setMode("Light mode");
            document.body.style = "background-color: #212529; transition: 0.3s;";
        } else {
            setMode("Dark mode");
            document.body.style = "background-color: whitesmoke; transition: 0.2s;";
        }
    }

    //TODO ---------- Affichage ----------

    return (
        <nav className={darkMode == true ? "dark" : ""}>
            <div className="leftNav">
                <h1>Where in the world ?</h1>
            </div>

            <div className="rightNav">
                <button className={darkMode == true ? "darkBtn" : ""} onClick={() => {clickMode()}}>{mode}</button>
            </div>
        </nav>
    )
}
