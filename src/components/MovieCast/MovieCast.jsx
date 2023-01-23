import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'Services/api';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getCastById(movieId).then(setMovieCast);
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <div>
          {movieCast.map(
            ({ credit_id, original_name, profile_path, character }) => {
              return (
                <div key={credit_id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={original_name}
                  />
                  <div>
                    <p>{original_name}</p>
                    <p>{`Character: ${character}`} </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
};
