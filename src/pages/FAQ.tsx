import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import Accordion from '../components/Accordion';

export default function FAQ() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="container">
          <h1>FAQs</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>
            The stuff people usually ask us.
          </p>
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container" style={{ maxWidth: '720px' }}>
          <Accordion items={faqs} />

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--navy)', borderRadius: 'var(--radius-card)', textAlign: 'center' }}>
            <p style={{ color: 'var(--white)', marginBottom: '1rem', fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.03em' }}>
              Still Got Questions?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Drop us a message — we're pretty quick at replying.
            </p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
