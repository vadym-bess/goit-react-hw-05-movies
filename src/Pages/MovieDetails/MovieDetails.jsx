import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect, useRef } from 'react';
import { getMovieById } from 'Services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  const currentLocation = useRef(location.state?.from ?? '/');

  return (
    <div className={css.MovieDetailsThumb}>
      {movieDetails && (
        <>
          <div className={css.button}>
            <NavLink className={css.buttonLink} to={currentLocation.current}>
              Go back
            </NavLink>
          </div>

          <div>
            <MovieInfo movieDetails={movieDetails} />
            <div>
              <h2>Additional information</h2>
              <ul>
                <li>
                  <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
