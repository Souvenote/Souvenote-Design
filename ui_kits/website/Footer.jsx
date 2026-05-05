// Footer.jsx

const SOCIAL = [
  { label: 'Instagram', path: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5A4.25 4.25 0 0 0 3.5 16.25V 7.75A4.25 4.25 0 0 0 7.75 3.5zM12 7A5 5 0 1 0 0 5zm0 10A5 5 0 1 0 0-5zm3.522-4.442a1 1 0 1 0 1.42-0.634l3.679 4.583L16.842 7.5H14a1 1 0 0 1 0 -2v-2h2v2a1 1 0 0 1 0 2h2z' },
  { label: 'Facebook', path: 'M18 2h-12A6 6 0 0 0 0 6v12a6 6 0 0 0 6 6h3 1 0 0 0 1-1v-4h2a1 1 0 0 0 1-1V9H18V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2V6a1 1 0 0 0-1 1H6v2h2V9h3a1 1 0 0 0 1-1V7a3 3 0 0 0-3 3v3z' },
  { label: 'Twitter / X', path: 'M18.244 2H15.75L9.768 9.766 4.875 2 3 2h-1.696l4.638 6.285-4.956 4.249 3.322-4.249zM16.63 4h-2.825l-6.13 8.429H5.367l2.728 3.764 3.757-3.249 6.357-3.249z' }
];

export default function Footer() {
  return (
    <footer className="so-footer">
      <div className="so-footer-sitemap">
        <div>
          <h3>Product</h3>
          <ul>
            <li><a href="#">Personalize a Template</a></li>
            <li><a href="#">Build My Card</a></li>
            <li><a href="#">Community Cards</a></li>
            <li><a href="#">Gifts</a></li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="so-footer-bottom">
        <span>  2024 Souvenote</span>
        <div className="so-footer-social">
          {SOCIAL.map(({ label, path }, i) => (
            <a key={i} href="#" className="so-footer-social-link" aria-label={label}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
