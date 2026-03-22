export default function Progress({ progress }: { progress: number }) {
  return <div id="prog" style={{ width: `${progress}%` }} />;
}
