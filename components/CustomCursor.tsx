'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/60 shadow-[0_0_24px_rgba(124,58,237,0.5)] transition-opacity duration-200 md:block"
      style={{ transform: `translate(${position.x}px, ${position.y}px)`, opacity: visible ? 1 : 0 }}
    />
  );
}
