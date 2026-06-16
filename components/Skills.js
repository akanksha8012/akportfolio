const groups = [
  {
    category: 'Frontend',
    icon: '⬡',
    skills: [
      { name: 'React.js',     level: 90 },
      { name: 'Next.js',      level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    category: 'JavaScript',
    icon: '◈',
    skills: [
      { name: 'ES6+',         level: 88 },
      { name: 'REST APIs',    level: 85 },
      { name: 'DOM & Async',  level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: '⬢',
    skills: [
      { name: 'Node.js',      level: 72 },
      { name: 'Express.js',   level: 70 },
      { name: 'MongoDB',      level: 68 },
      { name: 'SQL (MySQL)',  level: 60 },
    ],
  },
  {
    category: 'Tools & Other',
    icon: '◇',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Figma',        level: 78 },
      { name: 'Python',       level: 65 },
      { name: 'C++',          level: 60 },
    ],
  },
];

const concepts = [
  'SSR', 'SSG', 'Responsive Design', 'SEO Basics',
  'OOP', 'Agile / Scrum', 'Code Reviews', 'REST Architecture', 'Postman',
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.15em] block mb-3">
            Technical Skills
          </span>
          <h2 className="font-display font-bold tracking-tight mb-3 text-[clamp(1.8rem,4vw,2.5rem)]">
            What I work with
          </h2>
          <p className="text-textS text-sm max-w-md mx-auto">
            A year of building real products has sharpened my frontend craft —
            here&apos;s where I spend most of my time.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {groups.map((g) => (
            <div
              key={g.category}
              className="bg-card border border-border rounded-xl p-7
                hover:border-accent hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-accent text-lg">{g.icon}</span>
                <span className="font-display font-bold text-sm">{g.category}</span>
              </div>

              <div className="flex flex-col gap-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-textS">{s.name}</span>
                      <span className="text-textM font-mono">{s.level}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${s.level}%`,
                          background: 'linear-gradient(90deg, #7c6af7, #2dd4bf)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Concept pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {concepts.map((c) => (
            <span
              key={c}
              className="font-mono text-xs px-4 py-1.5 border border-borderB rounded-full
                text-textM bg-surface hover:border-teal hover:text-teal transition-colors duration-200"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
