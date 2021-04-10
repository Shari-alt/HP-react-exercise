// export default function SingleCharacter ({name, patronus, house, species, image}) {
//     return (
//         <section className="SingleUser">
//             <h2> {name} </h2>
//             <p> {patronus}</p>
//             <p> {house}</p>
//             <p> {species}</p>
//             <img src={image} alt={name} />
//         </section>

//     )
// }

// function SingleCharacter ({name, patronus, house, species, image}) {
function SingleCharacter () {
    const {id} = useParams();
    const [character, setCharacter] = useState({}) 
    
    useEffect(() => {
        const url = `http://hp-api.herokuapp.com/api/characters/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data)=> {
        setCharacter(data)
    })

    }, [id]);
    
    return (
        <section className="SingleUser">
            <h2> {name} </h2>
            <p> {patronus}</p>
            <p> {house}</p>
            <p> {species}</p>
            <img src={image} alt={name} />
        </section>

    )
}