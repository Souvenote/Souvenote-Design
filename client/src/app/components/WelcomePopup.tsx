'use client';

import { useEffect, useState } from 'react';
import { Poppins, Cormorant_Garamond } from 'next/font/google';

const poppins = Poppins({ weight: ['200', '400', '600'], subsets: ['latin'], display: 'swap' });
const cormorant = Cormorant_Garamond({ weight: ['200', '300', '400', '600', '700'], subsets: ['latin'], display: 'swap' });

export function WelcomePopup() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: 12,
        padding: '24px',
        maxWidth: 400,
        textAlign: 'center'
      }}>
        <h2 style={{ fontFamily: cormorant.style.fontFamily, fontSize: 24 }}>Welcome to Souvenote</h2>
        <p>Your memories, beautifully presented.</p>
        <button onClick={() => setShow(false)} style={{ marginTop: 12, padding: '8px 16px', background: '#222', color: 'white', borderRadius: 6, cursor: 'pointer' }}>Got it</button>
      </div>
    </div>
  ) : null;
}
