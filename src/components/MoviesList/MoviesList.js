// import PropTypes from 'prop-types';
// import ImageGalleryItem from '../ImageGalleryItem';
import styles from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  return (
      <ul className={styles.moviesList}>
          {movies.map(movie => (
              <li key={movie.id}>
                  {movie.title}
              </li>
          ))}
    </ul>
  );
}

// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
//   onSelect: PropTypes.func.isRequired,
// };