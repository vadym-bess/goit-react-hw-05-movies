import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'Services/api';
import { Link } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!filter) {
      return;
    }

    getSearchMovie(filter).then(setMovieList);
  }, [filter]);

  const handlerSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: movieName });
    setMovieName('');
  };

  const getMovieName = e => {
    const value = e.currentTarget.value;
    setMovieName(value);
  };

  return (
    <div>
      <form className={css.formItem} onSubmit={handlerSubmit}>
        <label>
          <input type="text" onChange={getMovieName} value={movieName} />
        </label>
        <button type="submit">Searching...</button>
      </form>
      <ul>
        {movieList.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
