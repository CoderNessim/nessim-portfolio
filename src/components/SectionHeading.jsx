import Reveal from './Reveal';

const SectionHeading = ({ index, eyebrow, title, children }) => (
  <Reveal className="max-w-2xl">
    <p className="eyebrow">
      {index} / {eyebrow}
    </p>
    <h2 className="section-title">{title}</h2>
    {children && (
      <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg dark:text-neutral-400">
        {children}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
