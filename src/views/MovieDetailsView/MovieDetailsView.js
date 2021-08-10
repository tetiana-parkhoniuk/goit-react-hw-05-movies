import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { NavLink, Route } from 'react-router-dom';
import { fetchMovieDetails } from 'services/moviesApi';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import styles from './MovieDetailsView.module.css';

export default function MovieDetailsView() {
    const { url, path } = useRouteMatch();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

    return (
        <>
            {movie && <div className={styles.movieContainer}>
                <img className={styles.movieImg} src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                <div className={styles.movieInfo}>
                    <h2 className={styles.movieTitle}>{movie.title}</h2>
                    <p className={styles.movieText}>User Score: {movie.vote_average * 10}&#x25;</p>
                    <h3 className={styles.movieOverviewTitle}>Overview</h3>
                    <p className={styles.movieText}>{movie.overview}</p>
                    <h3 className={styles.movieGenresTitle}>Genres</h3>
                    <p className={styles.movieText}>{ movie.genres.map(genre => genre.name).join(', ')}</p>
                </div>
            </div>}
            <hr />
            <div className={styles.additionalInfo}>
                <h3>Additional information</h3>
                <ul>
                    <li className={styles.additionalLink}>
                        <NavLink to={`${url}/cast`}>Cast</NavLink>
                    </li>
                    <li className={styles.additionalLink}>
                        <NavLink to={`${url}/reviews`}>Reviews</NavLink>
                    </li>
                </ul>
            </div>
            <hr />

            <Route path={`${path}/cast`}>
                <Cast movieId={movieId} />
            </Route>

            <Route path={`${path}/reviews`}>
                <Reviews movieId={movieId} />
            </Route>
        </>
    )
}