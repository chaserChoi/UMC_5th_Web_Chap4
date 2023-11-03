import Movie from "../Movie";
import { movies } from "../movieList";

function Movies() {
  return (
    <div>
      <div className="app-container">
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
