import { useEffect, useState } from 'react';

export default function Loader({ loading }: { loading: boolean }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        const next = prev + Math.random() * 18 + 4;
        return next >= 100 ? 100 : next;
      });
    }, 80);

    const cleanup = setTimeout(() => {
      setPercent(100);
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(cleanup);
    };
  }, []);

  return (
    <div id="loader" className={!loading ? 'out' : ''}>
      <div className="ld-logo">NYTHEX</div>
      <div className="ld-bar">
        <div className="ld-fill" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="ld-num">{Math.floor(percent)}%</div>
    </div>
  );
}
