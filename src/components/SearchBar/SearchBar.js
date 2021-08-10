import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export default function Searchbar({ onSubmit }) {
  const handleSearch = event => {
    event.preventDefault();
    onSubmit(event.target.elements.searchQuery.value);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          className={styles.searchFormInput}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button type="submit" className={styles.searchFormBtn}>
          Search
        </button>

      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};