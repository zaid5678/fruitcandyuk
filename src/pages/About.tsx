import { Link } from 'react-router-dom';
import CandyIcon from '../components/CandyIcon';

export default function About() {
  return (
    <main id="main-content">
      <section className="section bg-cream" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--pink-deep)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <CandyIcon size={64} />
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', color: 'var(--navy)', marginBottom: '1rem' }}>
            Our Story
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--muted)', marginBottom: '2rem' }}>
            Coming soon.
          </p>
          <Link to="/shop" className="btn btn-primary">Shop Now →</Link>
        </div>
      </section>
    </main>
  );
}
