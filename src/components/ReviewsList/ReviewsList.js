import PropTypes from 'prop-types';
import styles from './ReviewsList.module.css';

export default function ReviewsList({ reviews }) {
    return (
        <>
            {reviews &&
                <ul className={styles.reviewsList}>
                    {reviews.map(review => (
                        <li className={styles.reviewsItem} key={review.id}>
                            <span className={styles.reviewsAuthor}>Author: {review.author}</span>
                            <br/>
                            <span>{review.content}</span>
                        </li>
                    ))}
                </ul>
            }

            {reviews.length === 0 && <p className={styles.noReviewsText}>We don't have any reviews for this movie.</p>}
        </>
    );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
