import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Spinner
        type="Circles"
        color="#bf2458"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}