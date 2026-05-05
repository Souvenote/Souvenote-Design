'use client';

import { Poppins, Cormorant_Garamond } from 'next/font/google';

const poppins = Poppins({ weight: ['200', '400', '600', '700'], subsets: ['latin'], display: 'swap' });
const cormorant = Cormorant_Garamond({ weight: ['300', '400'], subsets: ['latin'], display: 'swap' });

interface FormatModalProps {
  onClose: () => void;
  card: {
    name: string;
  };
}

export default function FormatModal({ onClose, card }: FormatModalProps) {
  const FORMATS = ['Standard', 'Premium', 'Mini'];
  const [selected, setSelected] = React.useState('Standard');

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
      <div style={{ background: 'white', padding: 32, borderRadius: 12, width: 400 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <h2 style={{ fontFamily: cormorant.style.fontFamily, fontSize: 20, fontWeight: 500 }}>Select Format</h2>
          <p style={{ color: '#666', marginBottom: 8 }}>For card: {card.name}</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {FORMATS.map(fmt => (
            <button
              key={fmt}
              onClick={() => setSelected(fmt)}
              style={{
                padding: '8px 16px',
                background: selected === fmt ? 'black' : 'white',
                color: selected === fmt ? 'white' : 'black',
                border: '1px solid black',
                cursor: 'pointer'
              }}
            >
              {fmt}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onClose} style={{ flex: 1, padding: '8px 16px', background: '#eee', border: 'none', cursor: 'pointer' }}>Cancel</button>
          <button style={{ padding: '8px 16px', background: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
