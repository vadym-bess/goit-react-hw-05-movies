import { getTrendingMovie } from 'Services/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovie().then(setMovies);
  }, []);

  return (
    <div>
      <h1 className={css.heading}>Trending today</h1>
      {movies.map(({ id, title }) => {
        return (
          <li className={css.moviesThumb} key={id}>
            <Link
              className={css.moviesItem}
              state={{ from: location }}
              to={`/movies/${id}`}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Home;
