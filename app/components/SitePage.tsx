'use client';

import { useState } from 'react';
import QuoteForm from './QuoteForm';
import { business, copy, type Language } from '../data/site';

const ids = ['services', 'materials', 'about', 'contact'];

export default function SitePage() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const content = copy[language];

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <p>{content.family}</p>
          <div className="topbar-actions">
            <button type="button" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
              {language === 'en' ? 'Español' : 'English'}
            </button>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-row">
          <a className="brand" href="#top" aria-label="Pasadena Recycling home">
            <span className="brand-mark" aria-hidden="true">♻</span>
            <span className="brand-name">Pasadena Recycling<small>Metal · Service · Value</small></span>
          </a>
          <nav aria-label="Main navigation">
            {content.nav.map((label, index) => <a key={ids[index]} href={`#${ids[index]}`}>{label}</a>)}
          </nav>
          <a className="button button-small desktop-call" href={business.phoneHref}>{content.callNow}</a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
          <div className={`mobile-menu-panel${menuOpen ? ' is-open' : ''}`} id="mobile-navigation">
            {content.nav.map((label, index) => (
              <a key={ids[index]} href={`#${ids[index]}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="mobile-call" href={business.phoneHref} onClick={() => setMenuOpen(false)}>{content.callNow} · {business.phoneDisplay}</a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.headline}</h1>
          <p className="hero-copy">{content.intro}</p>
          <div className="hero-actions">
            <a className="button" href={business.phoneHref}>{content.call}</a>
            <a className="button button-outline" href={business.directionsHref} target="_blank" rel="noreferrer">{content.directions}</a>
          </div>
        </div>
      </section>

      <section className="quick-info" aria-label="Business information">
        <div className="shell quick-info-grid">
          {content.quick.map(([label, value], index) => (
            <div key={label}>
              <span>{label}</span>
              {index === 3 ? <strong><a href={`mailto:${business.email}`}>{value}</a></strong> : <strong>{value.split('\n').map((line) => <span key={line}>{line}</span>)}</strong>}
            </div>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">{content.servicesKicker}</p><h2>{content.servicesTitle}</h2></div>
            <p>{content.servicesIntro}</p>
          </div>
          <div className="service-grid">
            {content.services.map(([number, title, body]) => (
              <article key={number} className="service-card"><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section materials" id="materials">
        <div className="shell">
          <p className="eyebrow">{content.materialsKicker}</p>
          <div className="section-heading compact"><h2>{content.materialsTitle}</h2><p>{content.materialsIntro}</p></div>
          <div className="material-grid">
            {content.materials.map(([symbol, title, body]) => (
              <article key={symbol} className="material-card">
                <span>{symbol}</span><div><h3>{title}</h3><p>{body}</p><small>{content.confirm}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="shell">
          <p className="eyebrow">{content.processKicker}</p><h2>{content.processTitle}</h2>
          <ol className="step-grid">
            {content.steps.map(([title, body], index) => (
              <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="shell about-grid">
          <div className="about-photo"><span>{content.ownerNote}</span></div>
          <div className="about-copy">
            <p className="eyebrow">{content.aboutKicker}</p><h2>{content.aboutTitle}</h2><p>{content.aboutBody}</p>
            <dl><div><dt>{language === 'es' ? 'Fundado' : 'Founded'}</dt><dd>{business.founded}</dd></div><div><dt>{language === 'es' ? 'Idioma' : 'Language'}</dt><dd>English / Español</dd></div></dl>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">{content.contactKicker}</p><h2>{content.contactTitle}</h2><p>{content.contactBody}</p>
            <div className="contact-list">
              <a href={business.phoneHref}><small>{language === 'es' ? 'TELÉFONO' : 'PHONE'}</small>{business.phoneDisplay}</a>
              <a href={`mailto:${business.email}`}><small>EMAIL</small>{business.email}</a>
              <a href={business.directionsHref} target="_blank" rel="noreferrer"><small>{language === 'es' ? 'DIRECCIÓN' : 'ADDRESS'}</small>{business.address}</a>
            </div>
          </div>
          <div><p className="form-note">{content.formNote}</p><QuoteForm language={language} /></div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true">♻</span><span className="brand-name">Pasadena Recycling<small>Metal · Service · Value</small></span></div>
          <p>{content.footerNote}</p>
        </div>
      </footer>
    </main>
  );
}
