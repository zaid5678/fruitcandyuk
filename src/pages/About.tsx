import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>
            Started in a kitchen. Still in a kitchen.
          </p>
        </div>
      </div>

      <article className="section bg-cream">
        <div className="container" style={{ maxWidth: '780px' }}>

          {/* Intro */}
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151', marginBottom: '2rem' }}>
            It started because of a YouTube video. We watched someone freeze-dry a bag of Skittles and couldn't believe what they looked like — puffed up, pale, completely different from the original. We ordered a second-hand freeze dryer off eBay and three weeks later we were standing in a kitchen in Hackney absolutely losing our minds over a bowl of crunchy Skittles.
          </p>

          {/* Team image placeholder */}
          <div style={{
            width: '100%',
            aspectRatio: '16/7',
            background: 'var(--charcoal)',
            borderRadius: 'var(--radius-card)',
            border: 'var(--border-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            overflow: 'hidden',
          }}>
            <img
              src="https://placehold.co/780x340/1C2433/F4A6C0?text=The+Team"
              alt="The Fruit Candy UK team in our East London kitchen"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem', color: 'var(--navy)' }}>How It Started</h2>
          <p style={{ lineHeight: '1.8', color: '#374151', marginBottom: '1.5rem' }}>
            Two of us — siblings, grew up in East London, shared a sweet tooth and an inability to leave a new food trend alone. The first batch was just for us. Then we brought some to a family thing and it was gone in ten minutes. Then a friend asked if they could buy some. Then a TikTok went a bit viral and suddenly we had seventy orders and one freeze dryer.
          </p>
          <p style={{ lineHeight: '1.8', color: '#374151', marginBottom: '2rem' }}>
            We were packing orders on the kitchen table at midnight for about three weeks straight. It was chaotic but honestly brilliant. We bought a second freeze dryer, moved everything to a proper setup, and here we are.
          </p>

          {/* Process image placeholder */}
          <div style={{
            width: '100%',
            aspectRatio: '16/7',
            background: 'var(--charcoal)',
            borderRadius: 'var(--radius-card)',
            border: 'var(--border-card)',
            marginBottom: '2rem',
            overflow: 'hidden',
          }}>
            <img
              src="https://placehold.co/780x340/0E1624/F4A6C0?text=The+Process"
              alt="The freeze-drying process in action"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem', color: 'var(--navy)' }}>How Freeze-Drying Works</h2>
          <p style={{ lineHeight: '1.8', color: '#374151', marginBottom: '1.5rem' }}>
            We vacuum-freeze the sweets, pulling out the moisture until they puff up into a crunchy, intensely flavoured version of themselves. The process — called sublimation — converts the ice inside the sweet straight to vapour, skipping the liquid stage entirely. What you're left with is all the flavour, none of the chew, and a texture that's hard to describe until you try it.
          </p>
          <p style={{ lineHeight: '1.8', color: '#374151', marginBottom: '2rem' }}>
            Different sweets react very differently. Skittles puff up dramatically. Millions turn into tiny crispy tubes. Jolly Ranchers shatter into sharp, intensely flavoured shards. Part of the fun of what we do is figuring out which sweets work and how to time the process for each one. There's more to it than just chucking them in and hoping for the best.
          </p>

          {/* Quote block */}
          <blockquote className="about-quote">
            "We just wanted to share our favourite sweets with the world. Turns out the world liked them back."
          </blockquote>

          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem', color: 'var(--navy)' }}>The Community</h2>
          <p style={{ lineHeight: '1.8', color: '#374151', marginBottom: '1.5rem' }}>
            A big part of why this has grown is TikTok. People love watching the before and after — the soft, chewy original versus the crunchy, puffed-up freeze-dried version. We've had videos get hundreds of thousands of views from people just reacting to a bag of Skittles. It still surprises us.
          </p>
          <p style={{ lineHeight: '1.8', color: '#374151', marginBottom: '2.5rem' }}>
            We try to reply to every DM and every comment. It's still small enough that we can. If you've got a suggestion for something we should try freeze-drying, send it over — some of our best products came from follower suggestions.
          </p>

          {/* Kitchen image placeholder */}
          <div style={{
            width: '100%',
            aspectRatio: '16/7',
            background: 'var(--charcoal)',
            borderRadius: 'var(--radius-card)',
            border: 'var(--border-card)',
            marginBottom: '2.5rem',
            overflow: 'hidden',
          }}>
            <img
              src="https://placehold.co/780x340/E87BA5/0E1624?text=The+Kitchen"
              alt="Our East London kitchen setup"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/shop" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
              Shop the Range →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
