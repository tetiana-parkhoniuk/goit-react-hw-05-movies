import PropTypes from 'prop-types';
import defaultIMG from '../../images/defaultIMG.jpeg';
import styles from './CastList.module.css';

export default function CastList({ actors }) {
    return (
        <ul className={styles.actorsList}>
            {actors.map(actor => (
                <li className={styles.actorsItem} key={actor.id}>
                    {actor.profile_path ? (
                        <img
                            className={styles.img}
                            src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
                            alt={actor.name}
                        />
                    ) : (<img className={styles.img} src={defaultIMG} alt="" width="300px"/>)}
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
