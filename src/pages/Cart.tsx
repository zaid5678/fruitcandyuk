import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Modal from '../components/Modal';
import CandyIcon from '../components/CandyIcon';

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const shipping = subtotal >= 25 ? 0 : 2.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main id="main-content">
        <div className="page-hero">
          <div className="container"><h1>Your Cart</h1></div>
        </div>
        <section className="section bg-cream">
          <div className="container">
            <div className="cart-empty">
              <div className="cart-empty-icon">
                <CandyIcon size={72} />
              </div>
              <h2>Your Cart's Looking a Bit Sad...</h2>
              <p>Nothing in here yet. Let's fix that.</p>
              <Link to="/shop" className="btn btn-primary">Shop Now →</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="container">
          <h1>Your Cart</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>
            {items.length} item{items.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container">
          <div className="cart-layout">
            {/* Cart items */}
            <div>
              <div role="list" aria-label="Cart items">
                {items.map(({ product, quantity }) => (
                  <div key={product.slug} className="cart-row" role="listitem">
                    <img src={product.image} alt={product.name} />
                    <div>
                      <Link to={`/product/${product.slug}`} className="cart-row-name">{product.name}</Link>
                      <p style={{ fontSize: '0.83rem', color: 'var(--muted)', marginTop: '0.25rem' }}>£{product.price.toFixed(2)} each</p>
                    </div>
                    <div className="qty-stepper" role="group" aria-label={`Quantity for ${product.name}`}>
                      <button onClick={() => updateQuantity(product.slug, quantity - 1)} aria-label="Decrease quantity">−</button>
                      <span aria-live="polite">{quantity}</span>
                      <button onClick={() => updateQuantity(product.slug, quantity + 1)} aria-label="Increase quantity">+</button>
                    </div>
                    <span className="cart-row-price" style={{ minWidth: '60px', textAlign: 'right' }}>
                      £{(product.price * quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(product.slug)}
                      aria-label={`Remove ${product.name} from cart`}
                      style={{ color: 'var(--muted)', padding: '0.5rem', borderRadius: '6px', transition: 'color 0.2s', minHeight: '44px', minWidth: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/shop" style={{ fontSize: '0.875rem', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  <ShoppingBag size={14} />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Summary */}
            <aside className="cart-summary-box" aria-label="Order summary">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1rem' }}>Order Summary</h2>

              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span style={{ color: 'var(--pink-deep)', fontWeight: 600 }}>Free 🎉</span> : `£${shipping.toFixed(2)}`}</span>
              </div>
              {subtotal < 25 && (
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
                  Add £{(25 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              <div className="cart-summary-row total">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center', fontSize: '1.1rem' }}
                onClick={() => setCheckoutOpen(true)}
              >
                Checkout
              </button>

              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '1rem', textAlign: 'center', lineHeight: '1.6' }}>
                Secure checkout · Free returns · UK only
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Checkout modal */}
      <Modal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)}>
        <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🛍️</div>
        <h2>Checkout Coming Soon!</h2>
        <p>
          We're still setting up our online checkout. In the meantime, DM us on Instagram to place your order — we'll sort everything from there.
        </p>
        <a
          href="https://instagram.com/fruitcandy.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ display: 'inline-flex', justifyContent: 'center' }}
        >
          DM @fruitcandy.uk on Instagram
        </a>
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '1rem' }}>
          Or email <a href="mailto:fruitcandyuk@gmail.com" style={{ color: 'var(--pink-deep)' }}>fruitcandyuk@gmail.com</a>
        </p>
      </Modal>
    </main>
  );
}
