import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 — Brand */}
          <div>
            <img
              src="/logo.jpg"
              alt="Fruit Candy UK"
              className="footer-brand-logo"
            />
            <p className="footer-tagline">
              Freeze-dried sweets,<br />straight outta East London.
            </p>
            <div className="footer-socials" style={{ marginTop: '1.25rem' }}>
              <a
                href="https://instagram.com/fruitcandy.uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Fruit Candy UK on Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://tiktok.com/@fruitcandy.uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Fruit Candy UK on TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h2 className="footer-heading">Quick Links</h2>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">Our Story</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/cart">Cart</Link>
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h2 className="footer-heading">Get in Touch</h2>
            <div className="footer-contact">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Mail size={14} style={{ color: 'var(--pink)', marginTop: '3px', flexShrink: 0 }} />
                <a href="mailto:fruitcandyuk@gmail.com">fruitcandyuk@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={14} style={{ color: 'var(--pink)', marginTop: '3px', flexShrink: 0 }} />
                <p>Based in East London, UK</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--pink)', marginTop: '3px', flexShrink: 0, display: 'flex' }}><InstagramIcon size={14} /></span>
                <a href="https://instagram.com/fruitcandy.uk" target="_blank" rel="noopener noreferrer">@fruitcandy.uk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © 2026 Fruit Candy UK. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
