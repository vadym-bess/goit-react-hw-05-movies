import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'Services/api';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviewsById(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  if (reviews.length === 0) {
    return <p>Sorry, we don't have reviews for this film</p>;
  }

  return (
    <>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>{`Author: ${review.author}`}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
