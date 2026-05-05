'use client';

import React from 'react';
import { Occasion } from '@/types/card';

const OCCASIONS: Occasion[] = ['Birthday', 'Anniversary', 'Wedding', 'Thank You', 'Holiday'];

interface OccasionFiltersProps {
  activeFilter: Occasion | null;
  onFilterChange: (occasion: Occasion | null) => void;
}

export default function OccasionFilters({ activeFilter, onFilterChange }: OccasionFiltersProps) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {OCCASIONS.map((occ) => (
        <button
          key={occ}
          onClick={() => onFilterChange(activeFilter === occ ? null : occ)}
          style={{
            padding: '6px 12px',
            border: activeFilter === occ ? '2px solid black' : '1px solid #ccc',
            background: activeFilter === occ ? 'black' : 'white',
            color: activeFilter === occ ? 'white' : 'black',
            cursor: 'pointer'
          }}
        >
          {occ}
        </button>
      ))}
    </div>
  );
}
