const stats = [
  { value: '1+',   label: 'Year Experience' },
  { value: '3',    label: 'Live Projects' },
  { value: '8.33', label: 'MCA CGPA' },
  { value: '2',    label: 'Internships' },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* Left */}
        <div>
          <span className="font-mono text-xs text-accent uppercase tracking-[0.15em] block mb-3">
            About Me
          </span>
          <h2 className="font-display font-bold tracking-tight leading-tight mb-6
            text-[clamp(1.8rem,4vw,2.75rem)]">
            Frontend developer who cares about the{' '}
            <span className="text-accent italic">details</span>
          </h2>
          <p className="text-textS leading-relaxed mb-4 text-[0.95rem]">
            I&apos;m a Patna‑based frontend developer with a Master&apos;s in Computer
            Applications (CGPA 8.33) and over a year of hands‑on industry experience.
            I spent a year at Destiny IT Services where I grew from building web pages
            to architecting SSR‑powered Next.js apps — all within 6 months.
          </p>
          <p className="text-textS leading-relaxed text-[0.95rem]">
            My sweet spot is converting Figma mockups into polished, accessible
            interfaces. I care about performance, clean code, and experiences people
            actually enjoy using.
          </p>

          {/* Info rows */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
            {[
              { label: 'Location', value: 'Patna, Bihar', href: null },
              { label: 'Email', value: 'akanksharani8050@gmail.com', href: 'mailto:akanksharani8050@gmail.com' },
              { label: 'GitHub', value: 'github.com/akanksha8012', href: 'https://github.com/akanksha8012' },
              { label: 'LinkedIn', value: 'akanksha-rani8050', href: 'https://linkedin.com/in/akanksha-rani8050' },
            ].map((r) => (
              <div key={r.label} className="flex gap-4 text-sm">
                <span className="font-mono text-[0.72rem] text-textM min-w-[80px] pt-0.5 uppercase tracking-wider">
                  {r.label}
                </span>
                {r.href ? (
                  <a href={r.href} target="_blank" rel="noreferrer"
                    className="text-accentS hover:text-accent transition-colors">
                    {r.value}
                  </a>
                ) : (
                  <span className="text-textS">{r.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-1
                  hover:border-accent hover:-translate-y-1 transition-all duration-200"
              >
                <span className="font-display font-extrabold text-accent leading-none text-4xl">
                  {s.value}
                </span>
                <span className="text-xs text-textM">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Quote card */}
          <div className="bg-card border border-border border-l-[3px] border-l-accent rounded-xl p-6">
            <p className="text-textS text-sm leading-relaxed italic">
              &ldquo;Upgraded from Web Developer to Frontend Developer within 6 months
              of joining my first internship — driven by curiosity and a love for
              building things that look and feel great.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
