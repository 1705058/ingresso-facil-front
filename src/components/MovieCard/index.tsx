import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
    movie: Movie;
}

function MovieCard( {movie} : Props ) {

    return (
        <div>
            <img className="ingressofacil-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="ingressofacil-card-bottom-container">
                <h3>{movie.title}</h3>

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary ingressofacil-btn">Comprar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;