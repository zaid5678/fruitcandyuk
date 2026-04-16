import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="navbar" role="banner">
        <div className="container">
          <div className="navbar-inner">
            <Link to="/" className="navbar-brand" aria-label="Fruit Candy UK — Home">
              <img
                src="/logo.jpg"
                alt="Fruit Candy UK logo"
                className="navbar-logo"
              />
              <span className="navbar-wordmark">Fruit Candy UK</span>
            </Link>

            <nav className="navbar-nav" aria-label="Main navigation">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Link
                to="/cart"
                className="navbar-cart-btn"
                aria-label={`Cart — ${totalItems} item${totalItems !== 1 ? 's' : ''}`}
              >
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="cart-badge" aria-hidden="true">{totalItems}</span>
                )}
              </Link>
              <button
                className="navbar-hamburger"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
