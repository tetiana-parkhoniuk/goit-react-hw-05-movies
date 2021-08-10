import toast, { Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesApi';
import styles from './HomeView.module.css';

export default function HomeView() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        async function getTrendingMovies() {
            try {
                const trendingMovies = await fetchTrendingMovies();
                setTrendingMovies([...trendingMovies]);
            } catch (error) {
                toast.error('Something went worng, please try again.');
            }
        }

        getTrendingMovies();

    }, []);

    return (
        <>
            <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
            <h1 className={styles.title}>Trending today</h1>
            <ul className={styles.trendingMoviesList}>
                {trendingMovies.map(movie => (
                    <li className={styles.trendingMoviesListItem} key={movie.id}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </>
    );
}