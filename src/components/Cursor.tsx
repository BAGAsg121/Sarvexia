import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setRingPos(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.11,
        y: prev.y + (pos.y - prev.y) * 0.11,
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [pos]);

  return (
    <>
      <div id="cur" style={{ left: `${pos.x}px`, top: `${pos.y}px` }} />
      <div id="cur-ring" style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }} />
    </>
  );
}
