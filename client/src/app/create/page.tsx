'use client';

import Link from 'next/link';
import { Poppins, Cormorant_Garamond } from 'next/font/google';

const poppins = Poppins({ weight: ['200', '400', '600'], subsets: ['latin'], display: 'swap' });
const cormorant = Cormorant_Garamond({ weight: ['300', '400'], subsets: ['latin'], display: 'swap' });

interface CardPreview {
  theme: 'gold' | 'silver' | 'rose';
  name: string;
  occasion: string;
}

export default function CreatePage() {
  const cards: CardPreview[] = [
    { theme: 'gold', name: 'Comic Strip', occasion: 'Birthday' },
    { theme: 'silver', name: 'Star Gaze', occasion: 'Anniversary' },
    { theme: 'rose', name: 'Sunset Skylines', occasion: 'Wedding' },
  ];

  const [selected, setSelected] = useState<CardPreview | null>(null);

  const handleSelectCard = (card: CardPreview) => {
    setSelected(selected?.id === card.id ? null : card);
  };

  return (
    <div style={{ display: 'flex', gap: 24 }}>
      {cards.map(card => (
        <div
          key={card.id}
          onClick={() => handleSelectCard(card)}
          style={{
            padding: 24, border: selected?.id === card.id ? '2px solid blue' : '2px solid transparent',
            cursor: 'pointer'
          }}
        >
          <h3>{card.name}</h3>
          <p>{card.occasion}</p>
        </div>
      ))}
    </div>
  );
}
