import { PropTypes } from 'prop-types';

export const MovieInfo = ({ movieDetails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <div>
        <h2>{`${title}  (${release_date.slice(0, 4)})`}</h2>
        <p>{`User score: ${Math.round(vote_average * 10)}%`}</p>
        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>{genres.map(genre => `${genre.name} `)}</p>
        </div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
