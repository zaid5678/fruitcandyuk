import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from '../components/SocialIcons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <main id="main-content">
      <div className="page-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>
            We usually reply within 24 hours.
          </p>
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div>
              {submitted ? (
                <div style={{
                  background: 'var(--white)',
                  border: 'var(--border-card)',
                  borderRadius: 'var(--radius-card)',
                  padding: '3rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '0.75rem' }}>Message Sent!</h2>
                  <p style={{ color: 'var(--muted)' }}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-two-col">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="First and last name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="What's it about? (Put 'wholesale' for trade enquiries)"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us what you need..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      rows={6}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send Message
                  </button>
                </form>
              )}
              <style>{`
                @media (max-width: 639px) { .form-two-col { grid-template-columns: 1fr !important; } }
              `}</style>
            </div>

            {/* Contact info */}
            <div className="contact-info-box">
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.03em', color: 'var(--pink)', marginBottom: '1rem' }}>
                  Contact Details
                </p>
              </div>
              <div className="contact-info-item">
                <Mail size={16} />
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.2rem' }}>Email</p>
                  <a href="mailto:fruitcandyuk@gmail.com" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    fruitcandyuk@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <MapPin size={16} />
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.2rem' }}>Location</p>
                  <p>Based in East London, UK</p>
                </div>
              </div>
              <div className="contact-info-item">
                <Clock size={16} />
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.2rem' }}>Response time</p>
                  <p>Usually within 24 hours</p>
                </div>
              </div>
              <div className="contact-info-item">
                <InstagramIcon size={16} />
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.2rem' }}>Instagram</p>
                  <a href="https://instagram.com/fruitcandy.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    @fruitcandy.uk
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <TikTokIcon size={16} />
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.2rem' }}>TikTok</p>
                  <a href="https://tiktok.com/@fruitcandy.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    @fruitcandy.uk
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.65' }}>
                  For wholesale or collab enquiries, pop <strong style={{ color: 'var(--pink)' }}>'wholesale'</strong> in the subject line and tell us a bit about your setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
