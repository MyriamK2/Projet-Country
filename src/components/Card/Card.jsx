import { Link } from "react-router-dom";
import "./Card.css";


export default function Card({ source, pays, population, region, capital, darkMode }) {

    return (
        <Link to={`/country/${pays.split(' ').join('-')}`}>
            
            <div className={darkMode ? "card dark" : "card"}>
                <div className="imgCard">
                    <img src={source} width={275} alt="" />
                </div>
                <div className="bodyCard">
                    <h3> {pays} </h3>

                    <p><span>Population :</span> {population}</p>
                    <p><span>Region :</span> {region}</p>
                    <p><span>Capital :</span> {capital}</p>
                </div>
            </div>
            
        </Link>
    )
}
