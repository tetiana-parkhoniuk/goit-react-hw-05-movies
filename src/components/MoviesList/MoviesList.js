import PropTypes from 'prop-types';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const { url } = useRouteMatch();
  const location = useLocation();
  console.log(location);
  
  return (
    <ul className={styles.moviesList}>
          {movies.map(movie => (
            <li className={styles.moviesListItem} key={movie.id}>
              <Link
                className={styles.movieLink}
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: {from: location},
                }}
                >{movie.title}</Link>
            </li>
          ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};