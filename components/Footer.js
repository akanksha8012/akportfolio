export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="font-display text-xl font-extrabold">
          AR<span className="text-accent">.</span>
        </span>
        <p className="text-xs text-textM">
          © {new Date().getFullYear()} Akanksha Rani. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
