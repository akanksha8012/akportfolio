const jobs = [
  {
    role: 'Frontend Developer Intern',
    company: 'Destiny IT Services Pvt. Ltd.',
    location: 'Patna',
    period: 'Aug 2025 – Dec 2025',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    points: [
      'Built and optimised responsive UI components in React and Next.js, ensuring consistent UX across devices and browsers.',
      'Implemented Server-Side Rendering (SSR) and dynamic routing in Next.js, boosting page performance and SEO.',
      'Translated Figma/UX mockups into pixel-perfect, reusable React components styled with Tailwind CSS.',
      'Reduced component re-renders with React.memo and lazy loading, measurably improving app load time.',
      'Participated in daily stand-ups, code reviews, and sprint planning in an Agile/Scrum workflow.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Destiny IT Services Pvt. Ltd.',
    location: 'Patna',
    period: 'Jan 2025 – Jul 2025',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    points: [
      'Developed and maintained responsive web pages with HTML5, CSS3, and JavaScript, improving load speed and UX.',
      'Integrated RESTful APIs and handled JSON data to power dynamic features across client-facing web pages.',
      'Collaborated with senior developers to debug and optimise front-end code, reducing reported issues significantly.',
      'Built basic back-end routes using Node.js/Express and managed data with MongoDB.',
      'Gained hands-on experience with Git/GitHub version control and collaborative development workflows.',
    ],
  },
];

const education = [
  { degree: 'MCA – Master of Computer Applications', school: 'L N Mishra Institute, Patna',       year: '2023 – 2025', result: 'CGPA 8.33 · Grade A' },
  { degree: 'B.Sc. – Mathematics',                   school: 'Tilka Manjhi Bhagalpur University', year: '2019 – 2023', result: '69% · Grade A' },
  { degree: 'Intermediate (PCM)',                     school: 'JNV Madhepura, Bihar',              year: '2017 – 2019', result: '85% · Grade A' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.15em] block mb-3">
            Experience
          </span>
          <h2 className="font-display font-bold tracking-tight text-[clamp(1.8rem,4vw,2.5rem)]">
            Where I&apos;ve worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          {jobs.map((job, i) => (
            <div key={i} className="grid grid-cols-[140px_28px_1fr] gap-x-6 md:grid-cols-[160px_28px_1fr]">
              {/* Left: date */}
              <div className="pt-0.5 text-right">
                <span className="font-mono text-[0.7rem] text-textM whitespace-nowrap">{job.period}</span>
              </div>

              {/* Center: line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-base outline outline-2 outline-accent mt-0.5 shrink-0" />
                {i < jobs.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border my-2" />
                )}
              </div>

              {/* Right: content */}
              <div className={`${i < jobs.length - 1 ? 'pb-12' : ''}`}>
                <h3 className="font-display font-bold text-lg mb-0.5">{job.role}</h3>
                <p className="text-textS text-sm mb-3">{job.company} · {job.location}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.tech.map((t) => (
                    <span key={t}
                      className="font-mono text-[0.65rem] px-2.5 py-0.5 bg-accent/10
                        border border-accent/30 rounded text-accentS">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="flex flex-col gap-2.5">
                  {job.points.map((p, j) => (
                    <li key={j}
                      className="timeline-dash relative pl-5 text-[0.875rem] text-textS leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <span className="font-mono text-xs text-accent uppercase tracking-[0.15em] block mb-6">
            Education
          </span>
          <div className="grid sm:grid-cols-3 gap-4">
            {education.map((e) => (
              <div
                key={e.degree}
                className="bg-card border border-border rounded-xl p-6
                  hover:border-teal hover:-translate-y-1 transition-all duration-200"
              >
                <div className="font-mono text-[0.7rem] text-teal mb-2">{e.year}</div>
                <div className="font-bold text-sm leading-snug mb-1">{e.degree}</div>
                <div className="text-textS text-xs mb-3">{e.school}</div>
                <div className="font-mono text-xs text-accentS">{e.result}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
