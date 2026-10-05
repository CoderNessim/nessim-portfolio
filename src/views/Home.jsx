import { motion, useReducedMotion } from 'framer-motion';
import portrait from '../assets/canvasPFP.jpeg';
import { EMAIL, socialLinks, stats } from '../constants';
import { SocialIcon } from '../components/Icons';
import Reveal from '../components/Reveal';

const Home = () => {
  const reduce = useReducedMotion();
  const fadeUp = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: 'easeOut', delay },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(120,113,108,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,113,108,.15)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="container-page relative grid items-center gap-12 pb-16 pt-28 sm:pt-36 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pb-24">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-1 font-mono text-xs text-stone-600 dark:border-neutral-800 dark:text-neutral-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            CS @ WashU · Class of Dec 2027
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 [text-wrap:balance] sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I&apos;m Nessim. I build the backends that let{' '}
            <span className="text-accent">AI agents do real work.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg dark:text-neutral-400"
          >
            This summer at <strong className="font-semibold text-stone-900 dark:text-white">PayPal</strong>, I
            built an enterprise MCP server that gives AI agents secure access to internal risk review
            systems. Before that I shipped internal tooling at{' '}
            <strong className="font-semibold text-stone-900 dark:text-white">Mastercard</strong>, and an
            App Store app for my university&apos;s chemistry tournament.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#experience" className="btn-primary">
              See my work
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-ghost">
              Get in touch
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {socialLinks.map(({ name, link }) => {
                return (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="rounded-lg p-2.5 text-stone-500 transition hover:text-accent dark:text-neutral-400"
                  >
                    <SocialIcon name={name} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.2)}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm"
        >
          <div className="absolute -inset-3 -z-0 rotate-3 rounded-3xl border border-accent/40" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200 dark:bg-neutral-900">
            <img
              src={portrait}
              alt="Nessim Yohros on the WashU campus"
              className="h-full w-full object-cover object-[50%_80%]"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-lg sm:-left-8 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-neutral-500">
              Previously
            </p>
            <p className="mt-0.5 text-sm font-semibold text-stone-900 dark:text-white">
              PayPal · Mastercard
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container-page relative pb-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 lg:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.06}
              className="bg-stone-50 p-5 sm:p-6 dark:bg-neutral-950"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-white">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm leading-snug text-stone-600 dark:text-neutral-400">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Home;
