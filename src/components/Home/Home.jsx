import "./Home.css";
import loupe from "../../img/loupe.png";
import arrow from "../../img/arrow-bottom.png";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";


export default function Home({ setSelection, darkMode, setDarkMode, datas }) {
    // //TODO ---------- States ----------

    const [valSearch, setValSearch] = useState("");

    const [regionSelected, setRegionSelected] = useState("All regions");

    
    //! Active State of the regions --------
    useEffect(() => {
        //? Get all .pCheck into an array
        const allPCheck = Array.from(document.getElementsByClassName('pCheck'));

        //? Loop through the array to "toggle" class "fa-solid fa-check"
        for (let i = 0; i < allPCheck.length; i++) {

            allPCheck[i].addEventListener("click", function () {
                let iconCheck = document.getElementsByClassName("iconCheck");

                let current = document.getElementsByClassName("fa-solid fa-check");

                //? Remove the class "fa-solid fa-check" from the element unclicked
                if(current.length > 0) {
                    current[0].className = current[0].className.replace(" fa-solid fa-check", "");
                } 

                //? Add the fa-solid fa-check class to the current/clicked button
                iconCheck[i].className += " fa-solid fa-check";
            });

        }
    }, []);
    //! -------------------------------------


    //TODO ---------- Comportements ----------

    //* ALPHABETIC ORDER ----------

    function alphabet(a, b) {
        if (a.name.common < b.name.common) {
            return -1;
        }
        if (a.name.common > b.name.common) {
            return 1;
        }
        return 0;
    }
    datas.sort(alphabet);


    //* DISPLAY Dropdown ----------

    const dropDisplayBlock = () => {
        let dropdown = document.querySelector(".dropdown-content");
        dropdown.classList.replace("d-none", "d-block");
    }

    const dropDisplayNone = () => {
        let dropdown = document.querySelector(".dropdown-content");
        dropdown.classList.replace("d-block", "d-none");
    }


    //TODO ---------- Affichage ----------

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="divInputs">

                <div className="leftInput">
                    <img src={loupe} alt="loupe" />
                    <input value={valSearch} onChange={(e) => { setValSearch(e.target.value) }} type="text" placeholder="Search for a country" />
                </div>


                <div className="rightInput" >
                    <p className="pRightInput" onClick={() => {dropDisplayBlock()}}>{regionSelected}</p>
                    <img src={arrow} width={10} alt="bottom-arrow" />

                    <div className={darkMode ? "dropdown-content d-none darkDrop" : "dropdown-content d-none"}>

                        <div className="divCheck">
                            <div className="checkBox"><i className="iconCheck fa-solid fa-check"></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("All regions"); dropDisplayNone(); }}>All regions</p> 
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className="iconCheck"></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("Africa"); dropDisplayNone(); }}>Africa</p>
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className="iconCheck"></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("America"); dropDisplayNone(); }}>America</p>
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className="iconCheck"></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("Asia"); dropDisplayNone(); }}>Asia</p>
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className="iconCheck"></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("Europe"); dropDisplayNone(); }}>Europa</p>
                        </div>
                        <div className="divCheck">
                            <div className="checkBox"><i className="iconCheck"></i></div>
                            <p className="pCheck" onClick={() => { setRegionSelected("Oceania"); dropDisplayNone(); }}>Oceania</p>
                        </div>

                    </div>
                </div>

            </div>


            <div className="containerCards">
                {regionSelected == "All regions" ?
                    datas
                        .filter((country) => {
                            return valSearch.toLowerCase() === "" ? country :
                                country.name.common.toLowerCase().includes(valSearch);
                        })
                        .map((element, index) => {
                            return (
                                <div key={index} onClick={() => { setSelection(element) }}>
                                    <Card
                                        source={element.flags.svg}
                                        pays={element.name.common}
                                        population={element.population}
                                        region={element.region}
                                        capital={element.capital}
                                        darkMode={darkMode} />
                                </div>
                            )
                        })

                : regionSelected == regionSelected ?
                    datas
                        .filter((element) => {
                            return element.region.includes(regionSelected);
                        })
                        .filter((country) => {
                            return valSearch.toLowerCase() === "" ? country :
                                country.name.common.toLowerCase().includes(valSearch);
                        })
                        .map((element, index) => {
                            return (
                                <div key={index} onClick={() => { setSelection(element) }}>
                                    <Card
                                        source={element.flags.svg}
                                        pays={element.name.common}
                                        population={element.population}
                                        region={element.region}
                                        capital={element.capital}
                                        darkMode={darkMode} />
                                </div>
                            )
                        })
                : ""}
            </div>
        </div>
    )
}
