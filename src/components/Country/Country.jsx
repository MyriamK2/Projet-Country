import "./Country.css";
import { Form, Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


export default function Country({selection, darkMode, setDarkMode, datas}) {
    //TODO ---------- States / Comportements ----------

    //* ---------- Prevent lost of infos (after refresh) ----------

    const {id} = useParams();

    selection = datas.find((e) => e.name.common.split(' ').join('-') === id);

    if(!selection){
        return <div>Loading...</div>;
    }


    //* ---------- Get name.common of border countries ----------

    let borderCountries = datas.filter(country => selection.borders ? selection.borders.includes(country.cca3) : "").map(country => country.name.common);

    // let borderCountries = [];

    // for (let i = 0; i < selection.borders.length; i++) {
    //     let border = selection.borders[i];
      
    //     for (let j = 0; j < datas.length; j++) {
    //       let country = datas[j];
      
    //       if (border === country.cca3) {
    //         borderCountries.push(country.name.common);
    //       }
    //     }
    // }


    //* ---------- Get Languages ----------

    let lang = Object.values(selection.languages)

    let langMap = lang.map((element) => {
        if(lang.length > 1) {
            // let txtLang = element + ", ";
            // txtLang.substring(0, txtLang.length - 1);
            return element + ", "
        } else {
            return element
        }
    })

    
    //* ---------- Get Currencies ----------

    let curren = Object.keys(selection.currencies);
    let currenKey = curren.map((element) => {return element});


    
    //TODO ---------- Affichage ----------

    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <Form action="/">
                <button className={darkMode ? "btnBack dark" : "btnBack"}>Back</button>
            </Form>

            <section className="sectionCountry">
                <div className="divFlag">
                    <img src={selection.flags.svg} alt="" />
                </div>

                <div className={darkMode ? "divInfos colorWhite" : "divInfos"}>
                    <h1>{selection.name.common}</h1>

                    <div className="infos">
                        <div className="rightInfos">
                            <p><span>Native name :</span> {selection.name.common}</p>
                            <p><span>Population :</span> {selection.population}</p>
                            <p><span>Region :</span> {selection.region}</p>
                            <p><span>Sub Region :</span> {selection.subregion}</p>
                            <p><span>Capital :</span> {selection.capital}</p>
                        </div>
                        <div className="leftInfos">
                            <p><span>Top Level Domain :</span> {selection.tld}</p>
                            <p><span>Currencies :</span> {selection.currencies[currenKey].name}</p>
                            <p><span>Languages :</span> {langMap} </p>
                        </div>
                    </div>

                    <div className="divBorderCountries">
                        <p><span>Border Countries :</span></p>

                        {selection.borders ? borderCountries.map((element, index) => {
                                return (
                                    <Link to={`/country/${element.split(' ').join('-')}`} key={index} className={darkMode ? "dark" : ""}>{element}</Link>
                                )
                            }) : ""}
                    </div>
                </div>
            </section>
        </div>
    )
}
