import { Link } from "react-router-dom";
import "../styles/MemeCard.css";

export default function MemeCard({data}) {

    const imageObject = require(`../images/${data.imageName}`);
    const imageActual = imageObject.default;
    return (
        <article className="MemeCard">
            <Link to={`meme/${data.imageName}`}>
                <img src={imageActual}></img>
            </Link>
        </article>
    );
};
