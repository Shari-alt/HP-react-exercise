import { useParams, /*useHistory */} from "react-router-dom";
import {useEffect, useState } from "react";

export default function SingleCharacter () {
    const {id} = useParams();
    const [characters, setCharacters] = useState({});
    // const history = useHistory();
    
    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/character/${id}`;

        fetch(url)
            .then((res) => res.json())
            .then((dataFromApi) => {
                setCharacters(dataFromApi);
            });
    }, [id]);
    
    return (
        <section className="SingleCharacter">
            <img src={characters.image} alt={characters.name} />
            <h2> {characters.name} </h2>
            {/* <button onClick={() => history.goBack()}> Back </button> */}
        </section>
    );
}