import { useState } from 'react';
import { projects } from '../constants';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.filter((p) => p.featured);
  const hiddenCount = projects.length - projects.filter((p) => p.featured).length;

  return (
    <section id="projects" className="section border-t border-stone-200 dark:border-neutral-900">
      <div className="container-page">
        <SectionHeading index="03" eyebrow="Projects" title="Things I've built on my own time.">
          Mobile, full-stack and AI side projects, from my very first app to ones real people use.
        </SectionHeading>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08} className="h-full">
              <Card project={project} />
            </Reveal>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => setShowAll((s) => !s)} className="btn-ghost">
              {showAll ? 'Show fewer projects' : `Show ${hiddenCount} more projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
