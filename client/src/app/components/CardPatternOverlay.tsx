import React from 'react';

interface CardPatternOverlayProps {
  variant?: 'dots' | 'lines' | 'plain';
}

export default function CardPatternOverlay({ variant = 'dots' }: CardPatternOverlayProps) {
  const patterns = {
    dots: `background-image: radial-gradient(circle at 1 1, rgba(255,255,255,0.15) 0%, transparent 70%); background-size: 20px 20px`,
    lines: `background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 20px 20px`,
    plain: ''
  };

  return (
    <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', ...patterns[variant] }} />
  );
}
