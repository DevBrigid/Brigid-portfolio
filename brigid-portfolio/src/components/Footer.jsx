export default function Footer() {
  return (
    <footer className="border-b-4 border-ink bg-signal px-6 py-6 text-paper">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 font-mono text-xs uppercase sm:flex-row">
        <div>
          <span className="font-bold">BRIGID MUKAMI</span> // SOFTWARE ENGINEER © 2026
        </div>
        <div className="flex items-center gap-4 text-[11px] opacity-90">
          <span>NAIROBI, KENYA</span>
          <span>•</span>
          <span>HAND-CRAFTED DIGITAL BROADSHEET</span>
        </div>
      </div>
    </footer>
  );
}