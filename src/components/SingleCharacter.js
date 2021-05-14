import { useParams, useHistory} from "react-router-dom";
import {useEffect, useState } from "react";
import "./SingleCharacter.css"

export default function SingleCharacter () {
    const {id} = useParams();
    const [characters, setCharacters] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/character/${id}`;

        fetch(url)
            .then((res) => res.json())
            .then((dataFromApi) => {
                setCharacters(dataFromApi);
            });
    }, [id]);
    
    function Type () {
        if ( characters.type !=="") {
            return <p> Type: {characters.type}</p> 
        } 
        }

    return (
        <section className={characters.status === "Alive" ? "Dead" : "unknown"}>
            <img src={characters.image} alt={characters.name} />
            <h2> {characters.name} </h2>
            <p> Status: {characters.status} </p>
            <p> Gender: {characters.gender} </p>
            <p> Species: {characters.species} </p> 
            <p> {Type()} </p> 
            <button onClick={() => history.goBack()}> Back </button>
        </section>
    );
}