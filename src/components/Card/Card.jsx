export default function Card ({ name, id, platforms, description, released, genres, image }) {
    return (
        <div className="PARA CSS DE LA CARTA">
            <h1>NAME: {name}</h1>
            <h3>ID: {id}</h3>
            <h3>PLATFORMS: {platforms}</h3>
            <h3>DESCRIPTION: {description}</h3>
            <h3>RELEASED: {released}</h3>
            <h3>GENRES: {genres}</h3>
            <img src={image} alt="image" />
        </div>
    )
}; 