import React from 'react';

interface SocialLoginButtonsProps {
  onGoogle?: () => void;
  onApple?: () => void;
}

export default function SocialLoginButtons({ onGoogle, onApple }: SocialLoginButtonsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <button onClick={onGoogle} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: 'white', border: '1px solid #ddd', borderRadius: 8, cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
        <svg width="20" height="20" viewBox="0 0 48 48">
          <path d="M47.532 23.86e-20 .032 1c-1.433 6.235-8.02 9.372-14.364 9.372 6.256 0 12.71-2.372 17.432-6.723L32.9 24.32 24 18.5c-3.372 3.354-8.203 5-13.644 5H 6z 24 12H24 30.398c-.323 2.048-.623 4.056-.9 6H 6z" fill="#4285F4"/>
        </svg>
        Google
      </button>
      <button onClick={onApple} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: 'black', color: 'white', borderRadius: 8, cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
        <svg width="20" height="20" viewBox="0 0 21 25" fill="white">
          <path d="M16.326 7.275L12.284 22H18.765L21 14.864h-4.964-.787V7.275h-4.71zm0 13.452c1.051 0 1.902-.863 1.902-1.927s-.851-1.927-1.902-1.927 c-1.053 0-1.902.863-1.902 1.927 .851 1.927 1.902 1.927z"/>
        </svg>
        Apple
      </button>
    </div>
  );
}
