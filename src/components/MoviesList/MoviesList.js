import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  return (
    <ul className={styles.moviesList}>
          {movies.map(movie => (
            <li className={styles.moviesListItem} key={movie.id}>
              {movie.title}
            </li>
          ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};