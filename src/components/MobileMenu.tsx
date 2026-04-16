import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from './SocialIcons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
    { to: '/cart', label: 'Cart' },
  ];

  return (
    <>
      <div
        className={`mobile-menu-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className={`mobile-menu-panel${isOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu-header">
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--pink)', letterSpacing: '0.06em' }}>
            MENU
          </span>
          <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu-links">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="mobile-menu-socials">
          <a
            href="https://instagram.com/fruitcandy.uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://tiktok.com/@fruitcandy.uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on TikTok"
          >
            <TikTokIcon size={18} />
          </a>
        </div>
      </nav>
    </>
  );
}
