import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug ?? '');
  const { addItem } = useCart();

  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) return <NotFound />;

  const images = product.images ?? [product.image, product.image, product.image];
  const related = getRelatedProducts(product.slug, 4);

  const handleAddToCart = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main id="main-content">
      {/* Breadcrumb */}
      <div className="bg-cream" style={{ padding: '0.875rem 0', borderBottom: '1px solid rgba(14,22,36,0.08)' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
            <Link to="/" style={{ color: 'var(--muted)' }}>Home</Link>
            {' / '}
            <Link to="/shop" style={{ color: 'var(--muted)' }}>Shop</Link>
            {' / '}
            <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section bg-cream" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="product-detail-layout">
            {/* Images */}
            <div>
              <div style={{
                aspectRatio: '1/1',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                border: 'var(--border-card)',
                background: 'var(--white)',
              }}>
                <img
                  src={images[activeImg]}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="product-thumbnails" role="group" aria-label="Product images">
                {images.map((src, i) => (
                  <button
                    key={i}
                    className={`product-thumbnail${activeImg === i ? ' active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                    aria-pressed={activeImg === i}
                  >
                    <img src={src} alt={`${product.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.isBestseller && <span className="badge badge-bestseller">Bestseller</span>}
                {product.isNew && <span className="badge badge-new">New</span>}
                <span className="badge" style={{ background: 'var(--cream)', border: '1px solid var(--navy)', color: 'var(--navy)' }}>
                  {product.category === 'classics' ? 'Freeze-Dried Classic' : product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--navy)' }}>{product.name}</h1>

              <div className="product-detail-rating">
                <StarRating rating={product.rating} size={18} />
                <span className="product-detail-rating-count">{product.rating} · {product.reviewCount} reviews</span>
              </div>

              <p className="product-detail-price">£{product.price.toFixed(2)}</p>

              <div>
                {product.description.map((para, i) => (
                  <p key={i} style={{ color: '#374151', lineHeight: '1.75', marginBottom: '0.75rem' }}>{para}</p>
                ))}
              </div>

              {/* Quantity + Add to Cart */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="qty-stepper" role="group" aria-label="Quantity">
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    disabled={qty <= 1}
                  >
                    −
                  </button>
                  <span aria-live="polite" aria-label={`Quantity: ${qty}`}>{qty}</span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  onClick={handleAddToCart}
                  aria-live="polite"
                >
                  {added ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                🚚 Free UK shipping on orders over £25 · Dispatched within 1–2 working days
              </p>

              {/* Ingredients collapsible */}
              <div className="collapsible-section">
                <button
                  className="collapsible-trigger"
                  onClick={() => setIngredientsOpen(o => !o)}
                  aria-expanded={ingredientsOpen}
                >
                  Ingredients & Allergens
                  <ChevronDown
                    size={18}
                    style={{ transform: ingredientsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s', color: 'var(--pink-deep)', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                </button>
                <div className={`collapsible-body${ingredientsOpen ? ' open' : ''}`} aria-hidden={!ingredientsOpen}>
                  <div className="collapsible-body-inner">{product.ingredients}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="section bg-cream" style={{ paddingTop: '1rem' }} aria-labelledby="related-heading">
        <div className="container">
          <div style={{ borderTop: '2px solid var(--navy)', paddingTop: '3rem' }}>
            <h2 id="related-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>
              You Might Also Like
            </h2>
            <div className="grid-4">
              {related.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
