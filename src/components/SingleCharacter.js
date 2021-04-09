export default function SingleCharacter ({name, patronus, house, species, image}) {
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