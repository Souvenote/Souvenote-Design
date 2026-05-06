// Navbar.jsx — floating glass navbar.
// Build My Card · Personalize a Template · Community Cards · Business · Gifts
// Two states: loggedIn=false (default → Get Started CTA)
//             loggedIn=true  → Credits ticker · Profile · Cart · Menu

const NAV_LINKS = [
  { label: 'Personalize a Template', sub: 'Curated designs, ready to make yours.' },
  { label: 'Build My Card',          sub: 'Start from scratch — photo, moment, song.' },
  { label: 'Community Cards',        sub: 'Cards shared by the Souvenote community.' },
  { label: 'Gifts',                  sub: 'Handpicked cards paired with a keepsake.' },
  { label: 'Business',               sub: 'Bulk, branded, and corporate gifting.' },
];

// --- icons ---------------------------------------------------------------
function IconImage() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M3.5 17 L9 12 L13 15.5 L17 11 L20.5 14.5" />
    </svg>
  );
}
function IconNote() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17V5l11-2v12" />
      <circle cx="6.5" cy="17.5" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="15.5" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}
function IconCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5h2.4l2.3 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 1.96-1.6L21 9H6" />
      <circle cx="10" cy="21" r="1.4" />
      <circle cx="17" cy="21" r="1.4" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

// --- ticker (image + song credits) --------------------------------------
function CreditsTicker({ images = 0, songs = 0 }) {
  return (
    <div className="souv-credits souv-credits-stack" title="Your credits">
      <span className="souv-credit"><IconImage /><b>{images}</b><em>Images</em></span>
      <span className="souv-credit"><IconNote /><b>{songs}</b><em>Songs</em></span>
    </div>
  );
}

// --- right cluster: logged-out vs logged-in -----------------------------
function NavRight({ loggedIn, user, credits, cartCount, profileOpen, setProfileOpen, menuOpen, setMenuOpen }) {
  if (!loggedIn) {
    return (
      <div className="souv-nav-right">
        <button className="souv-cta-flow"><span>Get Started</span></button>
      </div>
    );
  }
  return (
    <div className="souv-nav-right">
      <CreditsTicker images={credits.images} songs={credits.songs} />
      <span className="souv-nav-sep" />

      {/* Profile */}
      <div className="souv-iconbtn-wrap">
        <button
          className={`souv-iconbtn ${profileOpen ? 'is-open' : ''}`}
          onClick={() => { setProfileOpen(!profileOpen); setMenuOpen(false); }}
          aria-label="Account"
        ><IconUser /></button>
        {profileOpen && (
          <>
            <div className="souv-overlay" onClick={() => setProfileOpen(false)} />
            <div className="souv-popmenu souv-popmenu-wide">
              <div className="souv-popmenu-userhead">
                <div className="souv-popmenu-avatar">{user.initials}</div>
                <div>
                  <div className="souv-popmenu-name">{user.name}</div>
                  <div className="souv-popmenu-email">{user.email}</div>
                </div>
              </div>
              <div className="souv-popmenu-sep" />
              <div className="souv-popmenu-item">My Cards</div>
              <div className="souv-popmenu-item">Drafts</div>
              <div className="souv-popmenu-item">Orders & Shipping</div>
              <div className="souv-popmenu-item">Saved Templates</div>
              <div className="souv-popmenu-sep" />
              <div className="souv-popmenu-item">Account Settings</div>
              <div className="souv-popmenu-item">Buy More Credits</div>
              <div className="souv-popmenu-sep" />
              <div className="souv-popmenu-logout">Sign Out</div>
            </div>
          </>
        )}
      </div>

      {/* Cart */}
      <div className="souv-iconbtn-wrap">
        <button className="souv-iconbtn" aria-label="Cart">
          <IconCart />
          {cartCount > 0 && <span className="souv-cart-badge">{cartCount}</span>}
        </button>
      </div>

      {/* Hamburger */}
      <div className="souv-iconbtn-wrap">
        <button
          className={`souv-iconbtn ${menuOpen ? 'is-open' : ''}`}
          onClick={() => { setMenuOpen(!menuOpen); setProfileOpen(false); }}
          aria-label="Menu"
        ><IconMenu /></button>
        {menuOpen && (
          <>
            <div className="souv-overlay" onClick={() => setMenuOpen(false)} />
            <div className="souv-popmenu">
              <div className="souv-popmenu-item">Notifications</div>
              <div className="souv-popmenu-item">Help & Support</div>
              <div className="souv-popmenu-item">Refer a Friend</div>
              <div className="souv-popmenu-item">What's New</div>
              <div className="souv-popmenu-sep" />
              <div className="souv-popmenu-item">Business Tools</div>
              <div className="souv-popmenu-item">Gift Bundles</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Navbar({
  loggedIn = false,
  user = { name: 'Amelia Hart', email: 'amelia@souvenote.com', initials: 'AH' },
  credits = { images: 0, songs: 0 },
  cartCount = 0,
}) {
  const [hovered, setHovered] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);

  return (
    <header className={`souv-nav ${loggedIn ? 'is-loggedin' : ''}`}>
      {/* Logo */}
      <div className="souv-nav-logo">
        <img src={loggedIn ? "../../assets/hero-logo.png" : "../../assets/SecondaryLogo.png"} alt="Souvenote" />
      </div>

      {/* Links — center */}
      <nav className="souv-nav-links">
        {NAV_LINKS.map((link, i) => (
          <React.Fragment key={link.label}>
            {i > 0 && <span className="souv-nav-dot">·</span>}
            <div
              className="souv-nav-link-wrap"
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className={`souv-nav-link ${hovered === link.label ? 'is-hover' : ''}`}>
                {link.label}
                <span className="souv-nav-underline" />
              </span>
              {hovered === link.label && (
                <div className="souv-nav-popover">
                  <div className="souv-nav-popover-arrow" />
                  <div className="souv-rule-gold" />
                  <div className="souv-nav-popover-body">
                    <div className="souv-nav-popover-title">{link.label}</div>
                    <div className="souv-nav-popover-rule" />
                    <div className="souv-nav-popover-sub">{link.sub}</div>
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </nav>

      {/* Right cluster */}
      <NavRight
        loggedIn={loggedIn}
        user={user}
        credits={credits}
        cartCount={cartCount}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
}

Object.assign(window, { Navbar });
