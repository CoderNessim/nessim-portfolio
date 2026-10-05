import { experience } from '../constants';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const Experience = () => (
  <section id="experience" className="section border-t border-stone-200 dark:border-neutral-900">
    <div className="container-page">
      <SectionHeading index="02" eyebrow="Experience" title="Where I've shipped.">
        Two enterprise internships, an app in the App Store, and a year teaching intro CS.
      </SectionHeading>

      <ol className="mt-12 space-y-4 sm:mt-16">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 0.05}>
            <article className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-stone-300 sm:p-8 md:grid-cols-[220px_1fr] md:gap-10 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
              <header>
                <p className="font-mono text-xs text-stone-500 dark:text-neutral-500">{job.dates}</p>
                <h3 className="mt-2 text-xl font-bold text-stone-900 dark:text-white">{job.company}</h3>
                <p className="mt-0.5 text-sm font-medium text-accent">{job.role}</p>
                <p className="mt-0.5 text-sm text-stone-500 dark:text-neutral-500">{job.location}</p>
              </header>

              <div className="min-w-0">
                <p className="font-medium leading-relaxed text-stone-900 dark:text-neutral-100">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-5 text-[15px] leading-relaxed text-stone-600 dark:text-neutral-400"
                    >
                      <span className="absolute left-0 top-[0.7em] h-1 w-2.5 rounded-full bg-accent/70" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
