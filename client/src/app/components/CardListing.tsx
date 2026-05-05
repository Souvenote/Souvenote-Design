'use client';

import React from 'react';
import { CardTemplate } from '@/types/card';

interface CardListingProps {
  card: CardTemplate;
  onSelectAsIs: (card: CardTemplate) => void;
  onPersonalize: (card: CardTemplate) => void;
  onBuildMyOwn: () => void;
}

export default function CardListing({ card, onSelectAsIs, onPersonalize, onBuildMyOwn }: CardListingProps) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600 }}>{card.name}</h3>
        <p style={{ color: '#666', fontSize: 14 }}>{card.occasion}</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => onSelectAsIs(card)} style={{ padding: '8px 16px', background: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>Select As Is</button>
          <button onClick={() => onPersonalize(card)} style={{ padding: '8px 16px', background: 'white', border: '1px solid black', cursor: 'pointer' }}>Personalize</button>
          <button onClick={onBuildMyOwn} style={{ padding: '8px 16px', background: '#eee', border: 'none', cursor: 'pointer' }}>Build My Own</button>
        </div>
      </div>
    </div>
  );
}
