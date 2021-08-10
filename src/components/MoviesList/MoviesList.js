import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const { url } = useRouteMatch();
  
  return (
    <ul className={styles.moviesList}>
          {movies.map(movie => (
            <li className={styles.moviesListItem} key={movie.id}>
              <Link
                className={styles.movieLink}
                to={`${url}/${movie.id}`}
                >{movie.title}</Link>
            </li>
          ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};