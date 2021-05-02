import { Link } from "react-router-dom";
import "../styles/MemeCard.css";

export default function MemeCard({data}) {

    const imageObject = require(`../images/${data.imageName}`);
    const imageActual = imageObject.default;
    return (
        <article className="MemeCard">
            <Link to={`slider/${data.imageName.split(".")[0]}`}>
                <img src={imageActual}></img>
            </Link>
        </article>
    );
};
