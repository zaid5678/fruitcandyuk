PRODUCT IMAGES
==============

This folder holds your product images.

How to replace placeholder images:
1. Add your image files here (JPG or PNG recommended, 600x600px minimum, square crop)
2. Name them to match the slugs in src/data/products.ts
   e.g. freeze-dried-skittles.jpg, sour-starburst.jpg, etc.
3. In src/data/products.ts, update the `image` field for each product:
   e.g. image: '/products/freeze-dried-skittles.jpg'
4. Run `npm run build` to rebuild the site

Recommended image specs:
- Square (1:1 ratio) — 800x800px ideal
- White or transparent background for clean cards
- JPG for photos, PNG if you need transparency
