import PropTypes from 'prop-types';
import styles from './CastList.module.css';

export default function CastList({ actors }) {
    return (
        <ul className={styles.actorsList}>
            {actors.map(actor => (
                <li className={styles.actorsItem} key={actor.id}>
                    <img
                        className={styles.img}
                        src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
                        alt={actor.name} />
                    <br />
                    {actor.name}
                    <p>Character: { actor.character}</p>
                </li>
            ))}
        </ul>
    );
}

CastList.propTypes = {
  actors: PropTypes.array.isRequired,
};
