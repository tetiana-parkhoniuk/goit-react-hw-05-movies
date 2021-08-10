import toast, { Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import Searchbar from "components/SearchBar/SearchBar";
// import MoviesList from 'components/MoviesList';
import { fetchMovies } from 'services/moviesApi';

export default function MoviesView() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    // const [reqStatus, setReqStatus] = useState('idle');

    useEffect(() => {
    if (searchQuery === '') return;
    async function getMovies() {
      try {
        // setReqStatus('pending');
        const movies = await fetchMovies(searchQuery);
        setMovies([...movies]);
        // setReqStatus('fulfilled');

      } catch (error) {
        // setReqStatus('rejected');
        toast.error('Something went worng, please try again later.');
      }
    }
        getMovies();
        
    }, [searchQuery]);

    console.log(movies);
    

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    // setMovies([]);
  };
    

    return (
        <>
            <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
            <Searchbar onSubmit={handleFormSubmit} />
            {/* {movies.length > 0 && <MoviesList movies={movies} />} */}
             {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
            
            <div>test</div>
        </>
    );
}