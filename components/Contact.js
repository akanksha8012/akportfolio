export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-border relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[400px] rounded-full pointer-events-none
        bg-[radial-gradient(ellipse,rgba(124,106,247,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <span className="font-mono text-xs text-accent uppercase tracking-[0.15em] block mb-3">
          Contact
        </span>
        <h2 className="font-display font-extrabold tracking-tight mb-4
          text-[clamp(2rem,5vw,3.5rem)]">
          Let&apos;s work together
        </h2>
        <p className="text-textS leading-relaxed mb-10 text-[0.95rem]">
          I&apos;m currently open to new opportunities — freelance, full-time, or
          contract. Drop me a message and I&apos;ll get back to you quickly.
        </p>

        <a
          href="mailto:akanksharani8050@gmail.com"
          className="inline-block px-9 py-3.5 bg-accent text-white font-semibold rounded-md
            hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200 mb-8"
        >
          akanksharani8050@gmail.com
        </a>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="https://github.com/akanksha8012" target="_blank" rel="noreferrer"
            className="text-sm text-textS hover:text-accentS transition-colors">
            GitHub
          </a>
          <span className="text-textM">·</span>
          <a href="https://linkedin.com/in/akanksha-rani8050" target="_blank" rel="noreferrer"
            className="text-sm text-textS hover:text-accentS transition-colors">
            LinkedIn
          </a>
          <span className="text-textM">·</span>
          <a href="tel:+917764091766"
            className="text-sm text-textS hover:text-accentS transition-colors">
            +91 7764091766
          </a>
        </div>
      </div>
    </section>
  );
}
