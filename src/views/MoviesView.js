import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovies } from 'services/moviesApi';
import Searchbar from "components/SearchBar/SearchBar";
import MoviesList from 'components/MoviesList';

export default function MoviesView() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [reqStatus, setReqStatus] = useState('idle');

    useEffect(() => {
    if (searchQuery === '') return;
    async function getMovies() {
      try {
        setReqStatus('pending');
        const movies = await fetchMovies(searchQuery);
        setMovies([...movies]);
        setReqStatus('fulfilled');
      } catch (error) {
        setReqStatus('rejected');
        toast.error('Something went worng, please try again.');
      }
    }
        getMovies();
        
    }, [searchQuery]);
    
  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

    return (
        <>
            <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
            <Searchbar onSubmit={handleFormSubmit} />
            {reqStatus === 'fulfilled' && <MoviesList movies={movies} />}
        </>
    );
}