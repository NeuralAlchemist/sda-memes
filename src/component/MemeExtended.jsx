import { Link } from "react-router-dom";
import Information from "../data/information.json";
import "../styles/MemeExtended.css";

export default function MemeExtended({ match }) {
    const name = match.params.id;
    const memeIndex = Information.findIndex((item) => item.imageName === name);
    console.log(`current = ${memeIndex}`);
    const prevId = (memeIndex - 1 + Information.length) % Information.length;
    console.log(`prev = ${prevId}`);
    const nextId = (memeIndex + 1 + Information.length) % Information.length;
    console.log(`next = ${nextId}`);
    const prevMeme = Information[prevId];
    const nextMeme = Information[nextId];
    const imageObject = require(`../images/${Information[memeIndex].imageName}`);
    const imageActual = imageObject.default;

    
    return (
        <div className="single-meme">
            <div>
                <Link to={`${prevMeme.imageName}`} id="button" className="button-active">
                    &#8249;
                </Link>
            </div>
            <img src={imageActual} alt="" />
            <div>
                <Link to={`${nextMeme.imageName}`} id="button" className="button-active">
                    &#8250;
                </Link>
            </div>
        </div>
    );
}
