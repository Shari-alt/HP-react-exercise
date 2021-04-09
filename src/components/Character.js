import useState, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Characterlist () {
    const [characters, setCharacters]=useState();

    useEffect(() => {
        const url = `http://hp-api.herokuapp.com/api/characters`;
        fetch (url) 
        .then ((res) => res.json())
        .then((data) => {
        setCharacters(data);
    });
 }, []);

    function renderCharacter () {
        const characterList = characters.map((characters) => (
           <SingleCharacter
           key={characters.id}
           name={characters.name}
           species={characters.species}
           house={characters.house}
           patronus={characters.patronus}
           image={characters.image}
           />
        ));
        return characterList;
    }
    
   