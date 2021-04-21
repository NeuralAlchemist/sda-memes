import Information from "../data/information.json";
import MemeCard from "../component/MemeCard";
import "../styles/Home.css"

export default function Home() {

    const MemeArray = Information.map((item) => (
        <MemeCard key={item.id} data={item}/>
    ))
    return(
        <div className="image-grid">
            {MemeArray}
        </div>
    )
}
