import { ArrowUpRightIcon } from './Icons';

const Card = ({ project }) => {
  const { title, tagline, description, tech, image, fit, links } = project;
  const primary = links[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
      <a
        href={primary.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden
        className="block aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-neutral-900"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
            fit === 'contain' ? 'object-contain p-4' : 'object-cover object-top'
          }`}
        />
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{tagline}</p>
        <h3 className="mt-2 text-xl font-bold text-stone-900 dark:text-white">{title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-stone-600 dark:text-neutral-400">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-4 border-t border-stone-200 pt-4 dark:border-neutral-800">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-stone-900 transition hover:text-accent dark:text-white"
            >
              {link.label}
              <ArrowUpRightIcon />
              <span className="sr-only"> for {title}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
