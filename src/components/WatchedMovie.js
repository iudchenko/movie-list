const WatchedMovie = ({ movie, onDeleteWatched }) => {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          {movie.imdbRating && (
            <>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </>
          )}
        </p>
        <p>
          {movie.userRating && (
            <>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </>
          )}
        </p>
        <p>
          {movie.runtime && (
            <>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </>
          )}
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
