import { Link } from 'react-router-dom';
import type { Review } from '../data/reviews';
import StarRating from './StarRating';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="review-card-header">
        <StarRating rating={review.rating} size={14} />
        {review.verified && (
          <span className="badge badge-verified">Verified</span>
        )}
      </div>
      <h3 className="review-card-title">{review.title}</h3>
      <p className="review-card-body">{review.body}</p>
      <div className="review-card-meta">
        <strong>{review.author}</strong>
        <span>·</span>
        <span>{review.city}</span>
        <span>·</span>
        <span>{review.date}</span>
      </div>
      <Link
        to={`/product/${review.productSlug}`}
        className="review-card-product"
      >
        {review.productName}
      </Link>
    </article>
  );
}
