import { Link } from 'react-router-dom';
import CandyIcon from '../components/CandyIcon';

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="section bg-cream" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--pink-deep)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <CandyIcon size={80} />
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: 'var(--navy)', marginBottom: '1rem' }}>
            Lost in the Sweet Shop
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            We can't find what you're looking for.
          </p>
          <Link to="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </section>
    </main>
  );
}
