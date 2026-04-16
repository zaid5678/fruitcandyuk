import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card">
      <div className="product-card-img-wrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <div className="product-card-badges">
          {product.isBestseller && (
            <span className="badge badge-bestseller">Bestseller</span>
          )}
          {product.isNew && (
            <span className="badge badge-new">New</span>
          )}
        </div>
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-desc">{product.shortDesc}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginTop: '0.25rem' }}>
          <StarRating rating={product.rating} size={13} />
          <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>({product.reviewCount})</span>
        </div>
        <div className="product-card-footer">
          <span className="product-card-price">£{product.price.toFixed(2)}</span>
          <button
            className="product-card-add"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
