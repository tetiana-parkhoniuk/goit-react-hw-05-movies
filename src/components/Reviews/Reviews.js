import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieReviews } from 'services/moviesApi';
import ReviewsList from 'components/ReviewsList';

export default function Reviews({ movieId }) {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <>
            {reviews && <ReviewsList reviews={reviews} />}
        </>
    )
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
