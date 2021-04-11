import Homepic from "../image/Homepic.png"
import "./Home.css"
export default function Home () {
    return (
        <div className="Home">
            <h2 className="HomeText"> Welcome to Rick and Morty</h2>
            <img className="HomePicture" src={Homepic} alt=""/>
        </div>
    )
}