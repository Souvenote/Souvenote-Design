// Hero.jsx — headline + trial CTA + rotating card with music preview

function MusicPreviewButton({ label = 'Preview song' }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <button
      type="button"
      className={`souv-music-fab ${playing ? 'souv-music-playing' : ''}`}
      onClick={() => setPlaying(!playing)}
    >
      <span className="souv-music-icon">{playing ? '	
	
	
	
	
	
	
	
' : '	
	
	
'}</span>
      <span className="souv-music-label">{label}</span>
    </button>
  );
}

export default function Hero() {
  const CARDS = [
    { id: 1, front: 'Comic Strip', back: 'Handwritten Note', theme: 'gold', heroImage: '/hero-card-ceren.jpg', backImage: '/hero-card-moon.jpg' },
    { id: 2, front: 'Star Gaze', back: 'Handwritten Note', theme: 'silver', heroImage: '/hero-card-ceren.jpg', backImage: '/hero-card-moon.jpg' },
  ];

  const [current, setCurrent] = React.useState(0);

  const handleNext = () => setCurrent((c + 1) % CARDS.length);
  const handlePrev = () => setCurrent((c - 1 + CARDS.length) % CARDS.length);

  const card = CARDS[current];
  const isFlipped = false;

  return (
    <section className="so-hero">
      <div className="so-hero-content">
        <h1 className="so-hero-headline">
          <span className="so-headline-static">Explore the</span>
          <span className="so-headline-dynamic">possibilities</span>
        </h1>
        <p className="so-hero-sub">Hover any card to see it spin — every drop is a fresh occasion.</p>
        <div className="so-hero-ctas">
          <a href="/create" className="so-cta-btn so-cta-primary">Choose a Template</a>
          <a href="/build" className="so-cta-btn so-cta-secondary">Build My Card</a>
        </div>
      </div>
      <div className="so-hero-card-stage">
        <div className="so-card-stack">
          <div className="so-card so-card-hero so-theme-gold">
            {card && (
              <img className="so-card-image so-card-front" src={card.heroImage} alt="hero card"/>
            )}
          </div>
          <div className="so-card so-card-hero so-theme-silver">
            {card && (
              <img className="so-card-image so-card-front" src={card.heroImage} alt="hero card"/>
            )}
          </div>
        </div>
        <div className="so-hero-nav">
          <button onClick={handlePrev} className="so-nav-btn">‹</button>
          <div className="so-dots">
            {CARDS.map((_, i) => (
              <span key={i} className={i === current ? 'so-dot so-dot-active' : 'so-dot'}/>
            ))}
          </div>
          <button onClick={handleNext} className="so-nav-btn">※</button>
        </div>
        <MusicPreviewButton label="Preview song" />
      </div>
    </section>
  );
}
