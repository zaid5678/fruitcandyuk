import { useState, useMemo } from 'react';
import { products, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

type SortOption = 'featured' | 'price-asc' | 'price-desc';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sort, setSort] = useState<SortOption>('featured');

  const filtered = useMemo(() => {
    let list = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category === activeCategory);

    switch (sort) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      default: break;
    }
    return list;
  }, [activeCategory, sort]);

  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="container">
          <h1>The Shop</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>
            {products.length} products · Made in East London
          </p>
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container">
          {/* Mobile filters */}
          <div className="shop-mobile-filters">
            <div className="mobile-filter-row" role="group" aria-label="Filter by category">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  className={`mobile-filter-chip${activeCategory === cat.value ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat.value)}
                  aria-pressed={activeCategory === cat.value}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <label htmlFor="sort-mobile" style={{ fontSize: '0.875rem', fontWeight: 600, marginRight: '0.5rem' }}>Sort:</label>
            <select
              id="sort-mobile"
              className="sort-select"
              style={{ width: 'auto' }}
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          <div className="shop-layout">
            {/* Desktop sidebar */}
            <aside className="shop-sidebar" aria-label="Product filters">
              <div style={{ marginBottom: '2rem' }}>
                <p className="shop-filter-heading">Category</p>
                <div className="filter-list" role="group" aria-label="Filter by category">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.value}
                      className={`filter-btn${activeCategory === cat.value ? ' active' : ''}`}
                      onClick={() => setActiveCategory(cat.value)}
                      aria-pressed={activeCategory === cat.value}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="sort-desktop" className="shop-filter-heading" style={{ display: 'block' }}>Sort by</label>
                <select
                  id="sort-desktop"
                  className="sort-select"
                  value={sort}
                  onChange={e => setSort(e.target.value as SortOption)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </aside>

            {/* Product grid */}
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
              </p>
              {filtered.length > 0 ? (
                <div className="grid-4" role="list" aria-label="Products">
                  {filtered.map(product => (
                    <div key={product.slug} role="listitem">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted)' }}>
                  No products in this category yet. More coming soon!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
