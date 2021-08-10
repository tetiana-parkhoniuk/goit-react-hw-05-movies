import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchTrendingMovies } from 'services/moviesApi';
import styles from './HomeView.module.css';

export default function HomeView() {
    const { url } = useRouteMatch();
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [reqStatus, setReqStatus] = useState('idle');

    useEffect(() => {
        async function getTrendingMovies() {
            try {
                setReqStatus('pending');
                const trendingMovies = await fetchTrendingMovies();
                setTrendingMovies([...trendingMovies]);
                setReqStatus('fulfilled');
            } catch (error) {
                setReqStatus('rejected');
                toast.error('Something went worng, please try again.');
            }
        }

        getTrendingMovies();

    }, []);

    return (
        <>
            <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
            <h1 className={styles.title}>Trending today</h1>
            {reqStatus === 'fulfilled' &&
                <ul className={styles.trendingMoviesList}>
                    {trendingMovies.map(movie => (
                        <li className={styles.trendingMoviesListItem} key={movie.id}>
                            <Link
                                className={styles.movieLink}
                                to={`${url}/${movie.id}`}
                            >{movie.title}</Link>
                        </li>
                    ))}
                </ul>}
        </>
    );
}