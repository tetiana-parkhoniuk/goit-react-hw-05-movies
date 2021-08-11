import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieCast } from 'services/moviesApi';
import CastList from 'components/CastList/CastList';

export default function Cast({ movieId }) {
    const history = useHistory();
    let location = useLocation();
    const [actors, setActors] = useState(null);
    console.log('cast location:', location);

    useEffect(() => {
        fetchMovieCast(movieId).then(setActors);
    }, [movieId]);

    location = history.push(location.state.fromLocationState);

    return (
        <>
            {actors && <CastList actors={actors} />}
        </>
    )
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};