import { useRouteError, Link } from "react-router-dom";
import "./ErrorPage.css";


export default function ErrorPage () {
    const error = useRouteError();
    // console.log(error);
    console.error(error);

    return(
        <div className="divError">
            <h1>Oops !</h1>
            <p>Sorry, an unexpected error has occurred...</p>
            {/* <p> {error.statusText || error.message} </p> */}

            <p>Here is a helpful link :</p>
            <div className="linksError">
                <Link to={"/"}>Home</Link>
            </div>
        </div>
    )
}