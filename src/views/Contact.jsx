import { EMAIL, RESUME_URL, socialLinks } from '../constants';
import { MailIcon, SocialIcon } from '../components/Icons';
import Reveal from '../components/Reveal';

const Contact = () => (
  <section id="contact" className="border-t border-stone-200 dark:border-neutral-900">
    <div className="container-page section">
      <Reveal className="relative overflow-hidden rounded-3xl bg-neutral-900 px-6 py-14 text-center sm:px-12 sm:py-20 dark:bg-neutral-900">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
        />
        <p className="eyebrow relative">05 / Contact</p>
        <h2 className="relative mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-5xl">
          Let&apos;s build something.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          I&apos;m always happy to talk about internships, new-grad roles, MCP and agent tooling, or a
          project you&apos;re working on. My inbox is open.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${EMAIL}`} className="btn-primary w-full sm:w-auto">
            <MailIcon width={18} height={18} />
            <span className="break-all">{EMAIL}</span>
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full border border-neutral-700 text-white hover:border-neutral-500 sm:w-auto"
          >
            View resume
          </a>
        </div>

        <ul className="relative mt-8 flex justify-center gap-2">
          {socialLinks.map(({ name, link }) => {
            return (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="block rounded-lg p-3 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
                >
                  <SocialIcon name={name} />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>

    <footer className="container-page flex flex-col items-center justify-between gap-2 border-t border-stone-200 py-8 text-sm text-stone-500 sm:flex-row dark:border-neutral-900 dark:text-neutral-500">
      <p>© {new Date().getFullYear()} Nessim Yohros</p>
      <p className="font-mono text-xs">Built with React, Tailwind &amp; Framer Motion</p>
    </footer>
  </section>
);

export default Contact;
