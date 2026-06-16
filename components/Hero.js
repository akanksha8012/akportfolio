export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16">

      {/* Ambient blobs */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full
        bg-[radial-gradient(circle,rgba(124,106,247,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-36 -right-24 w-[500px] h-[500px] rounded-full
        bg-[radial-gradient(circle,rgba(45,212,191,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-borderB rounded-full
          bg-teal/5 text-teal font-mono text-xs mb-7">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse2 inline-block" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-textP mb-4
          text-[clamp(3.5rem,9vw,7.5rem)]">
          Akanksha<br />
          <span className="text-accent">Rani</span>
        </h1>

        {/* Role */}
        <p className="font-mono text-sm text-textS uppercase tracking-[0.12em] mb-6">
          Frontend &amp; Web Developer
        </p>

        {/* Tagline */}
        <p className="max-w-[560px] text-lg text-textS leading-relaxed mb-10">
          I build responsive, high‑performance web apps with{' '}
          <span className="text-accentS">React</span>,{' '}
          <span className="text-accentS">Next.js</span>, and{' '}
          <span className="text-accentS">Tailwind CSS</span> —
          translating designs into pixel‑perfect, accessible experiences.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-md text-sm
              hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="/AkankshaRani_CV.pdf"
            download
            className="px-8 py-3 border border-borderB text-textS rounded-md font-medium text-sm
              hover:border-accent hover:text-accentS hover:-translate-y-0.5 transition-all duration-200"
          >
            Download CV
          </a>
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2">
          {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-3 py-1.5 bg-card border border-border rounded-md text-textM"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-borderB rounded-full relative">
          <span className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
