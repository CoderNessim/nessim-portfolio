import { useContext } from 'react';
import { experienceData } from '../constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';

const Experience = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? 'pb-20 bg-fixed bg-gray-100' : 'pb-20 bg-black'
      }
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        id="experience"
      >
        <h2
          className={
            theme.state.darkMode
              ? 'text-4xl sm:text-5xl font-bold text-center'
              : 'text-4xl sm:text-5xl font-bold text-center text-white'
          }
        >
          Experience
        </h2>
        <div>
          <h4 className="mt-12 sm:mt-16 text-2xl sm:text-3xl font-semibold text-blue-500">
            Where I&apos;ve Worked
          </h4>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experienceData.map((el, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView={'visible'}
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0.9 },
                }}
                className={
                  theme.state.darkMode
                    ? 'p-6 bg-white rounded-lg flex flex-col'
                    : 'p-6 bg-gray-100 rounded-lg flex flex-col'
                }
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-xl font-bold">{el.company}</h4>
                  <p className="text-sm text-gray-500">{el.dates}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mt-1">
                  <p className="text-lg font-semibold text-blue-500">
                    {el.role}
                  </p>
                  <p className="text-sm text-gray-500">{el.location}</p>
                </div>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  {el.bullets.map((b, j) => (
                    <li key={j} className="text-base sm:text-lg">
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
