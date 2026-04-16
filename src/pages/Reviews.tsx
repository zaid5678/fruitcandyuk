import { useState } from 'react';
import { Link } from 'react-router-dom';
import { reviews, averageRating, totalReviews, ratingDistribution } from '../data/reviews';
import ReviewCard from '../components/ReviewCard';
import StarRating from '../components/StarRating';

type Filter = 'all' | '5' | '4' | 'photos';

export default function Reviews() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = reviews.filter(r => {
    if (filter === '5') return r.rating === 5;
    if (filter === '4') return r.rating === 4;
    if (filter === 'photos') return r.hasPhoto;
    return true;
  });

  const totalInDist = Object.values(ratingDistribution).reduce((a, b) => a + b, 0);

  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="container">
          <h1>Reviews</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>
            Real customers, real crunch.
          </p>
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container">

          {/* Rating summary */}
          <div className="rating-summary" role="region" aria-label="Rating summary">
            <div className="rating-big">
              <div className="rating-big-num" aria-label={`${averageRating} out of 5`}>{averageRating}</div>
              <StarRating rating={averageRating} size={20} />
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.375rem' }}>
                Based on {totalReviews.toLocaleString()} reviews
              </p>
            </div>

            <div className="rating-bars" role="list" aria-label="Rating distribution">
              {([5, 4, 3, 2, 1] as const).map(star => {
                const count = ratingDistribution[star] ?? 0;
                const pct = totalInDist > 0 ? Math.round((count / totalInDist) * 100) : 0;
                return (
                  <div key={star} className="rating-bar-row" role="listitem">
                    <span>{star}★</span>
                    <div className="rating-bar-track" aria-hidden="true">
                      <div className="rating-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span>{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filter chips */}
          <div className="filter-chips" role="group" aria-label="Filter reviews">
            {([ ['all', 'All Reviews'], ['5', '5★ Only'], ['4', '4★ Only'], ['photos', 'With Photos'] ] as [Filter, string][]).map(([val, label]) => (
              <button
                key={val}
                className={`filter-chip${filter === val ? ' active' : ''}`}
                onClick={() => setFilter(val)}
                aria-pressed={filter === val}
              >
                {label}
              </button>
            ))}
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
            Showing {filtered.length} review{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Reviews grid */}
          <div className="grid-2" role="list" aria-label="Customer reviews">
            {filtered.map(review => (
              <div key={review.id} role="listitem">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Leave a review CTA */}
          <div style={{
            marginTop: '3.5rem',
            background: 'var(--navy)',
            borderRadius: 'var(--radius-card)',
            padding: '2.5rem',
            textAlign: 'center',
          }}>
            <h2 style={{ color: 'var(--white)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>
              Tried Our Sweets?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
              We'd love to know what you think. DM us on Instagram or TikTok — or fill in the form below.
            </p>
            <form
              onSubmit={e => e.preventDefault()}
              style={{ maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              aria-label="Leave a review form"
            >
              <div className="form-group">
                <label htmlFor="review-name" style={{ color: 'var(--pink)', textAlign: 'left' }}>Your Name</label>
                <input id="review-name" type="text" placeholder="First name" autoComplete="given-name" />
              </div>
              <div className="form-group">
                <label htmlFor="review-product" style={{ color: 'var(--pink)', textAlign: 'left' }}>Product</label>
                <input id="review-product" type="text" placeholder="What did you try?" />
              </div>
              <div className="form-group">
                <label htmlFor="review-body" style={{ color: 'var(--pink)', textAlign: 'left' }}>Your Review</label>
                <textarea id="review-body" placeholder="Tell us what you thought..." />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'center' }}>
                Submit Review
              </button>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
                Reviews are submitted for moderation. This form is currently a preview — to submit your review now, DM us on{' '}
                <Link to="https://instagram.com/fruitcandy.uk" style={{ color: 'var(--pink)' }}>Instagram</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
