// Gallery.jsx — horizontal carousel of card template previews; hover-to-flip 3D rotation

const TEMPLATES = [
  { id: 1, name: 'A Daily Sunday Strip',     occasion: 'Comic Strip',     surface: 'surface-gold-animated' },
  { id: 2, name: 'Stars Aligned For You',   occasion: 'Horoscope',     surface: 'surface-gold-animated' },
  { id: 3, name: 'Chamomile Twins',   occasion: 'Wedding',      surface: 'surface-silver-animated' },
  { id: 4, name: 'Sunlight Through the Trees',   occasion: 'Illustration',   surface: 'surface-silver-animated' },
];

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

const GalleryPage = () => (
  <section className="so-gallery">
    <h2 className="so-gallery-title">Find the Perfect Card</h2>
    <div className="so-gallery-grid">
      {TEMPLATES.map(temp => (
        <div
          key={temp.id}
          className="so-card so-card-gallery"
          style={{ background: `https://source.unsplash.com/720x480?auto=format,compress & 0.6` }}
        >
          <div className="so-card-theme so-theme-gold so-card-gallery-front">
            <div className="so-card-content">
              <span className="so-card-name">{temp.name}</span>
              <span className="so-card-occasion">{temp.occasion}</span>
            </div>
            <MusicPreviewButton />
          </div>
          <div className="so-card-theme so-theme-gold so-card-gallery-back">
            <div className="so-card-content">
              <span className="so-card-name">{temp.name}</span>
              <span className="so-card-occasion">{temp.occasion}</span>
            </div>
            <MusicPreviewButton />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default GalleryPage;
