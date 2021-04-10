import useState, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Characterlist () {
   const [page, setPage] = useState();
   const[totalPages, setTotalPages] = useState();
   const [characters, setCharacters]=useState([]); /* Why the '[]'?*/ 

  useEffect(() => {
   const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
   
   fetch(url)
     .then((res) => res.json())
     .then((dataFromApi) => {
         setCharacters((prevUsers) => {
             return [...prevUsers, ...dataFromApi.results];
            });
            setTotalPages(dataFromApi.pages);
        });
}, [page]);

function renderCharacters () {
    return characters.map((character) => {
        const { name, id, image} = character;

        return (
            <li key={id}>
                <Link to={`/character/${id}`}>
                    {name} {image}
                </Link>
            </li>
        );
    });
}

function handleLoadMore(){
    if (page < totalPages){
        setPage(page +1);
    }
}

return (
    <div>
        <h2> This is the wonderful world of Rick and Morty</h2>
        <ul> {renderCharacters} </ul>
        {page <totalPages && (
            <button onClick={handleLoadMore}> Want to see more? </button>
        )}
    </div>
);
}


    
   