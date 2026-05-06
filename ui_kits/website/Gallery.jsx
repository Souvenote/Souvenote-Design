// Gallery.jsx — horizontal carousel of card template previews; hover-to-flip 3D rotation

const TEMPLATES = [
  { id: 1, name: 'A Daily Sunday Strip',     occasion: 'Comic Strip',     surface: 'surface-gold-animated' },
  { id: 2, name: 'Stars Aligned For You',   occasion: 'Horoscope',       surface: 'surface-rosegold-animated' },
  { id: 3, name: 'A Day In History',        occasion: 'On This Day',     surface: 'surface-silver-animated' },
  { id: 4, name: 'Once Upon A Card',        occasion: 'Fairy Tale',      surface: 'surface-rosegold-animated' },
  { id: 5, name: 'Find The Birthday',       occasion: "Where's Waldo",   surface: 'surface-trimetal-animated' },
  { id: 6, name: 'Cards For The Strange',   occasion: 'Dark Holidays',   surface: 'surface-silver-animated' },
];

function GalleryMusicOrnament() {
  return (
    <div className="souv-music-orn souv-music-orn-card" aria-hidden="true">
      <div className="souv-music-row">
        <span className="souv-music-note">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 17V5l11-2v12" /><circle cx="6" cy="17" r="2.5" /><circle cx="17" cy="15" r="2.5" /></svg>
        </span>
        <button className="souv-music-play" aria-label="Play">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </button>
        <div className="souv-music-track">
          <div className="souv-music-progress" />
          <div className="souv-music-handle" />
        </div>
        <span className="souv-music-time">0:42</span>
      </div>
    </div>
  );
}

function Gallery() {
  const [i, setI] = React.useState(0);
  const trackRef = React.useRef(null);

  React.useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current.children[i];
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }, [i]);

  return (
    <section className="souv-gallery">
      <div className="souv-gallery-head">
        <div className="souv-gallery-rail">
          <div className="souv-gallery-rail-line" />
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="souv-h1">
            <span className="souv-hero-italic text-metallic-silver">Explore the</span>{' '}
            <span className="souv-hero-italic text-metallic-rose-gold">possibilities</span>
          </h2>
          <p className="souv-gallery-sub">Hover any card to see it spin — every drop is a fresh occasion.</p>
          <div className="souv-gallery-controls">
            <button className="souv-chev" onClick={() => setI(Math.max(0, i - 1))} aria-label="Previous">‹</button>
            <button className="souv-chev" onClick={() => setI(Math.min(TEMPLATES.length - 1, i + 1))} aria-label="Next">›</button>
          </div>
        </div>
        <div className="souv-gallery-track-wrap">
          <div ref={trackRef} className="souv-gallery-track">
            {TEMPLATES.map((c, idx) => (
              <div key={c.id} className={`souv-gallery-card ${idx === i ? 'is-active' : ''}`}>
                <div className="souv-gallery-flip">
                  <div className="souv-gallery-flip-inner">
                    <div className={`souv-gallery-surface souv-gallery-flip-face souv-gallery-flip-front ${c.surface}`}>
                      <StampCorners />
                      <div className="souv-gallery-surface-center">
                        <div className="souv-gallery-occasion">{c.occasion}</div>
                      </div>
                      <MusicPreviewButton label={`Preview ${c.name} song`} />
                    </div>
                    <div className={`souv-gallery-surface souv-gallery-flip-face souv-gallery-flip-back ${c.surface}`}>
                      <StampCorners />
                      <div className="souv-gallery-surface-center">
                        <div className="souv-gallery-occasion">{c.occasion}</div>
                      </div>
                      <MusicPreviewButton label={`Preview ${c.name} song`} />
                    </div>
                  </div>
                </div>
                <div className="souv-gallery-meta">
                  <div className="souv-gallery-name">{c.name}</div>
                  <div className="souv-gallery-price">From $11.99 CAD</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Gallery });
