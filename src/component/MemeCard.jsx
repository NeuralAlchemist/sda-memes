import "../styles/MemeCard.css";

export default function MemeCard({data}) {

    const imageObject = require(`../images/${data.imageName}`);
    const imageActual = imageObject.default;
    return(
        <article className="MemeCard">
            <img src={imageActual}>
            </img>
        </article>
    )
};
