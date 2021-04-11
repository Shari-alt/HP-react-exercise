import  { useState,  useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";


function Characterlist () {
   const [page, setPage] = useState(1);
   const[totalPages, setTotalPages] = useState();
   const [characters, setCharacters]=useState([]); /* Why the '[]'?*/ 
   const [nameFilter, setNameFilter]= useState("");
   const [filter, setFilter] =useState("all");

  useEffect(() => {
   const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
   
   fetch(url)
     .then((res) => res.json())
     .then((dataFromApi) => {
         setCharacters((prevUsers) => {
             return [...prevUsers, ...dataFromApi.results];
            });
            setTotalPages(dataFromApi.info.pages);
        });
}, [page]);

    function handleLoadMore(){
        if (page < totalPages){
            setPage(page +1);
        }
    }

function onNameFilterChange(filterName) {
    setNameFilter(filterName);
}

function onStatusFilterChange(FilterValue) {
    if ( FilterValue === "Dead") {
        setFilter("Dead");
    } else if (FilterValue === "Alive") {
        setFilter("Alive");
    } else if (FilterValue === "unknown"){
        setFilter("unknown");
    } else if (FilterValue === "all"){
        setFilter("all");
    }
}

function renderCharacters () {
    return characters
    .filter((characters) => {
        return (
            characters.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
            nameFilter === ""
        );
    })
    .filter((characters) => {
        return characters.status === filter || filter === "all";
    })
   

    .map((character) => {
        const { name, id, image} = character;
        return (
            <li key={id}>
                <Link to={`/characters/${id}`}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                </Link>
            </li>
        );
    });
}



return (
    <div>
        <Filter onNameFilterChange={onNameFilterChange} onStatusFilterChange={onStatusFilterChange} />
        <h2> This is the wonderful world of Rick and Morty</h2>
        {renderCharacters()}
        {page < totalPages && (
        <button onClick={handleLoadMore}>  Want to see more? </button>
        )}
    </div>
);
}

export default Characterlist;

    
   