export default function BackToTop({ show }: { show: boolean }) {
  return (
    <div
      id="btt"
      className={show ? 'show' : ''}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 13 13">
        <path d="M6.5 11V2M1.5 7l5-5 5 5" />
      </svg>
    </div>
  );
}
