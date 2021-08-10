import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast } from 'services/moviesApi';
import CastList from 'components/CastList/CastList';

export default function Cast({movieId}) {
const [actors, setActors] = useState(null);

    useEffect(() => {
        fetchMovieCast(movieId).then(setActors);
    }, [movieId]);

    return (
        <>
            {actors && <CastList actors={actors} />}
        </>
    )
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};