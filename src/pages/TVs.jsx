import TV from "../TV";
import { tvs } from "../tvDummy";

function TVs() {
  return (
    <div>
      <div className="app-container">
        {tvs.results.map((item) => {
          return (
            <TV
              title={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TVs;
