import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Truck, Heart, TrendingUp } from 'lucide-react';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import CandyIcon from '../components/CandyIcon';
import StarRating from '../components/StarRating';
import { InstagramIcon, TikTokIcon } from '../components/SocialIcons';

const trustItems = [
  { icon: <Zap size={18} />, label: 'Freshly Made', sub: 'To order, in East London' },
  { icon: <Truck size={18} />, label: 'UK Shipping', sub: 'Fast Royal Mail delivery' },
  { icon: <Heart size={18} />, label: 'Family Run', sub: 'Small batch, real care' },
  { icon: <TrendingUp size={18} />, label: 'TikTok Famous', sub: 'As seen on @fruitcandy.uk' },
];

const featuredSlugs = ['freeze-dried-skittles', 'freeze-dried-starburst', 'freeze-dried-jolly-ranchers', 'mix-bag-bundle'];
const featuredProducts = products.filter(p => featuredSlugs.includes(p.slug));
const homeReviews = reviews.slice(0, 3);

const instaPosts = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  src: `https://placehold.co/400x400/0E1624/F4A6C0?text=Post+${i + 1}`,
  alt: `Fruit Candy UK Instagram post ${i + 1}`,
}));

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main id="main-content">
      {/* ---- HERO ---- */}
      <section className="bg-navy" style={{ padding: '80px 0' }} aria-label="Hero">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
          >
            <div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                color: 'var(--white)',
                letterSpacing: '0.02em',
                lineHeight: '1',
                marginBottom: '1.25rem',
              }}>
                Freeze-Dried Sweets,<br />
                <span style={{ color: 'var(--pink)' }}>Proper Crunchy.</span>
              </h1>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1.1rem',
                lineHeight: '1.65',
                marginBottom: '2rem',
                maxWidth: '420px',
              }}>
                Your favourite fruity sweets, reimagined. Handmade in East London, shipped across the UK.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/shop" className="btn btn-primary">Shop Now</Link>
                <Link to="/about" className="btn btn-outline-white">Our Story</Link>
              </div>
            </div>

            {/* Hero image composition */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '340px', height: '340px' }}>
                {/* Centre logo */}
                <div style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '160px', height: '160px',
                  borderRadius: '50%',
                  border: '3px solid var(--pink)',
                  overflow: 'hidden',
                  zIndex: 2,
                  boxShadow: '0 0 0 6px rgba(244, 166, 192, 0.15)',
                }}>
                  <img src="/logo.jpg" alt="Fruit Candy UK" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* Surrounding product images */}
                {[
                  { top: '0%', left: '50%', transform: 'translateX(-50%)', src: 'https://placehold.co/90x90/1C2433/F4A6C0?text=🍬', label: 'Freeze-Dried Skittles' },
                  { top: '50%', left: '0%', transform: 'translateY(-50%)', src: 'https://placehold.co/90x90/E87BA5/0E1624?text=⭐', label: 'Starburst' },
                  { top: '50%', right: '0%', transform: 'translateY(-50%)', src: 'https://placehold.co/90x90/FAF6F1/0E1624?text=🍒', label: 'Sour Patch' },
                  { bottom: '0%', left: '50%', transform: 'translateX(-50%)', src: 'https://placehold.co/90x90/E87BA5/FAF6F1?text=🎁', label: 'Bundle' },
                ].map((pos, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    ...pos,
                    width: '84px',
                    height: '84px',
                    borderRadius: '50%',
                    border: '2px solid var(--pink)',
                    overflow: 'hidden',
                    background: 'var(--charcoal)',
                  }}>
                    <img src={pos.src} alt={pos.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
            .hero-grid > div:last-child { display: none; }
            .hero-grid .btn { margin: 0 auto; }
          }
        `}</style>
      </section>

      {/* ---- TRUST STRIP ---- */}
      <div className="trust-strip" role="list" aria-label="Our promises">
        <div className="container">
          <div className="trust-strip-items">
            {trustItems.map(item => (
              <div key={item.label} className="trust-item" role="listitem">
                {item.icon}
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem' }}>{item.label}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block' }}>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- FEATURED PRODUCTS ---- */}
      <section className="section bg-cream" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="featured-heading">This Week's Favourites</h2>
            <p>The ones flying out the door right now.</p>
          </div>
          <div className="grid-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/shop" className="btn btn-outline-navy">See Everything →</Link>
          </div>
        </div>
      </section>

      {/* ---- ABOUT TEASER ---- */}
      <section className="section bg-navy" aria-labelledby="about-heading">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="about-teaser-grid"
          >
            <div>
              <h2 id="about-heading" style={{ color: 'var(--white)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem' }}>
                Started in a Kitchen in Hackney
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.75', marginBottom: '1rem' }}>
                It started as a TikTok experiment — we wanted to see what happened when you put a bag of Skittles in the freeze dryer. The result was so good we couldn't stop. Now we're shipping across the UK, still making everything in small batches.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                No massive factory. No preservatives. Just us, the freeze dryer, and a lot of sweets.
              </p>
              <Link to="/about" className="btn btn-outline-white">Read our story →</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'var(--pink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                border: '3px solid rgba(255,255,255,0.15)',
              }}>
                <img
                  src="/logo.jpg"
                  alt="Fruit Candy UK"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .about-teaser-grid { grid-template-columns: 1fr !important; }
            .about-teaser-grid > div:last-child { display: none; }
          }
        `}</style>
      </section>

      {/* ---- REVIEWS TEASER ---- */}
      <section className="section bg-cream" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="reviews-heading">What the TikTok Crowd Says</h2>
            <p>Real people, real crunch.</p>
          </div>
          <div className="grid-3">
            {homeReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <StarRating rating={4.9} size={20} />
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>4.9 out of 5</strong>
              <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>· 247 reviews</span>
            </div>
            <Link to="/reviews" className="btn btn-outline-navy">See all reviews →</Link>
          </div>
        </div>
      </section>

      {/* ---- INSTAGRAM / TIKTOK STRIP ---- */}
      <section aria-labelledby="social-heading">
        <div style={{ textAlign: 'center', padding: '2.5rem 0 1.25rem', background: 'var(--navy)' }}>
          <h2 id="social-heading" style={{ color: 'var(--white)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}>
            Follow @fruitcandy.uk
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginTop: '0.375rem' }}>
            Tag us for a repost
          </p>
        </div>
        <div className="insta-grid" role="list" aria-label="Social media posts">
          {instaPosts.map(post => (
            <a
              key={post.id}
              href="https://instagram.com/fruitcandy.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-post"
              role="listitem"
              aria-label={`View post on Instagram: ${post.alt}`}
            >
              <img src={post.src} alt={post.alt} loading="lazy" />
              <div className="insta-post-overlay" aria-hidden="true">
                {post.id % 2 === 0 ? <InstagramIcon size={22} /> : <TikTokIcon size={22} />}
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>View</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---- NEWSLETTER ---- */}
      <div className="newsletter-strip" role="complementary" aria-label="Newsletter signup">
        <div className="container">
          <div className="newsletter-inner">
            <CandyIcon size={32} style={{ color: 'var(--pink)' }} />
            <h2>Join the Sweet List</h2>
            <p>New flavours, limited drops, and the occasional discount. No spam, we promise.</p>
            {subscribed ? (
              <p className="newsletter-success" role="status">
                Thanks! We'll be in touch when something good drops. 🎉
              </p>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletter} noValidate>
                <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  aria-required="true"
                />
                <button type="submit" className="btn btn-primary">
                  Sign Me Up
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .sr-only {
          position: absolute; width: 1px; height: 1px;
          padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }
      `}</style>
    </main>
  );
}
