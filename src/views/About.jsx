import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const facts = [
  { label: 'Education', value: 'B.S. Computer Science, WashU McKelvey', sub: 'Graduating Dec 2027' },
  { label: 'Academics', value: '3.94 GPA', sub: "Dean's List every semester" },
  { label: 'Focus', value: 'Backend & AI agent tooling', sub: 'plus mobile on the side' },
  { label: 'Based in', value: 'St. Louis, MO', sub: 'Home in Miami, FL' },
];

const About = () => (
  <section id="about" className="section border-t border-stone-200 dark:border-neutral-900">
    <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <div>
        <SectionHeading index="01" eyebrow="About" title="From self-taught web apps to enterprise AI infrastructure." />
        <Reveal className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-stone-600 sm:text-lg dark:text-neutral-400">
          <p>
            I got into software by teaching myself web development: a weather app, then a Wordle
            clone for Overwatch fans that grew leaderboards and match history. Since then I&apos;ve
            moved deeper down the stack into Spring Boot services, database design and, most
            recently, the plumbing that connects LLMs to real company systems safely.
          </p>
          <p>
            The work I enjoy most is making things reliable and actually used: auth that respects
            permissions, APIs that agents can reason about, and apps people open every week.
          </p>
          <p>
            Outside of code I love learning languages, spoken ones as much as programming ones,
            which is how{' '}
            <a href="#projects" className="font-medium text-stone-900 underline decoration-accent decoration-2 underline-offset-4 dark:text-white">
              Language Buddy
            </a>{' '}
            happened.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} as="dl" className="grid content-start gap-px self-start overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-1 dark:border-neutral-800 dark:bg-neutral-800">
        {facts.map((f) => (
          <div key={f.label} className="bg-stone-50 p-5 dark:bg-neutral-950">
            <dt className="font-mono text-[11px] uppercase tracking-widest text-stone-500 dark:text-neutral-500">
              {f.label}
            </dt>
            <dd className="mt-1.5 font-semibold text-stone-900 dark:text-white">{f.value}</dd>
            <dd className="text-sm text-stone-500 dark:text-neutral-400">{f.sub}</dd>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default About;
