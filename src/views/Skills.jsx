import { skills } from '../constants';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const Skills = () => (
  <section id="skills" className="section border-t border-stone-200 dark:border-neutral-900">
    <div className="container-page">
      <SectionHeading index="04" eyebrow="Skills" title="What I work with." />

      <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200 sm:mt-16 dark:divide-neutral-800 dark:border-neutral-800">
        {skills.map((s, i) => (
          <Reveal
            key={s.group}
            delay={i * 0.04}
            className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 sm:pt-1.5 dark:text-neutral-500">
              {s.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
