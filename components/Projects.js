const projects = [
  {
    title: 'Customised Window Management System',
    period: 'Mar 2025 – Jun 2025',
    tech: ['React', 'Next.js', 'MongoDB', 'Tailwind CSS'],
    description:
      'Full-stack responsive website for Masswin Door featuring a Smart Window & Door Customizer tool, product showcases, customer reviews, and gallery. Achieved fast load times and strong CTA-driven lead generation.',
    liveUrl: '#',   // 🔗 Replace with your live URL
    codeUrl: '#',   // 🔗 Replace with your GitHub repo URL
    featured: true,
  },
  {
    title: 'Dairy Product E-Commerce Site',
    period: 'Nov 2025',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    description:
      'Responsive dairy e-commerce platform with dynamic product listings, image galleries, and testimonial sections. Focused on usability, credibility, and conversion-optimised UX.',
    liveUrl: '#',   // 🔗 Replace with your live URL
    codeUrl: '#',   // 🔗 Replace with your GitHub repo URL
    featured: false,
  },
  {
    title: 'Mithila Nature – Makhana UI',
    period: 'Dec 2025',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    description:
      'Responsive product showcase site featuring dynamic product cards, health benefits section, global reach map, and testimonials. Built for high engagement and mobile-first performance.',
    liveUrl: '#',   // 🔗 Replace with your live URL
    codeUrl: '#',   // 🔗 Replace with your GitHub repo URL
    featured: false,
  },
];

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
        0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
        -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
        .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
        -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
        c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
        0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
        0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.15em] block mb-3">
            Projects
          </span>
          <h2 className="font-display font-bold tracking-tight mb-2 text-[clamp(1.8rem,4vw,2.5rem)]">
            Things I&apos;ve built
          </h2>
          <p className="text-textS text-sm">
            Three live client projects delivered using React and Next.js.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`relative bg-card border rounded-xl p-8 flex flex-col gap-4
                hover:border-accent hover:-translate-y-1 transition-all duration-200
                ${p.featured
                  ? 'border-borderB bg-gradient-to-br from-card to-accent/[0.04]'
                  : 'border-border'}`}
            >
              {/* Featured badge */}
              {p.featured && (
                <span className="absolute top-4 right-4 font-mono text-[0.6rem] uppercase
                  tracking-widest text-accent bg-accent/10 border border-accent/30 rounded-full px-2.5 py-0.5">
                  Featured
                </span>
              )}

              {/* Title + period */}
              <div className="flex flex-col gap-1 pr-16">
                <h3 className="font-display font-bold text-base leading-snug">{p.title}</h3>
                <span className="font-mono text-[0.68rem] text-textM">{p.period}</span>
              </div>

              {/* Description */}
              <p className="text-textS text-sm leading-relaxed flex-1">{p.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t}
                    className="font-mono text-[0.65rem] px-2 py-0.5 bg-surface
                      border border-borderB rounded text-textM">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-1">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-accent text-white
                    text-xs font-semibold rounded-md hover:opacity-85 hover:-translate-y-0.5
                    transition-all duration-200"
                >
                  <ExternalIcon /> Live Demo
                </a>
                <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 border border-borderB
                    text-textS text-xs font-medium rounded-md hover:border-accent
                    hover:text-accentS hover:-translate-y-0.5 transition-all duration-200"
                >
                  <GithubIcon /> Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
