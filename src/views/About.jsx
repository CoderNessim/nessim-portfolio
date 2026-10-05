import { useContext } from 'react';
import { techStack } from '../constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? 'bg-white' : 'bg-gray-900'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? 'text-4xl sm:text-5xl font-bold text-center'
              : 'text-4xl sm:text-5xl font-bold text-center text-white'
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-2xl sm:text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? 'mt-4 text-lg sm:text-xl text-gray-500'
                  : 'mt-4 text-lg sm:text-xl text-white'
              }
            >
              I&apos;m Nessim Yohros, a senior at WashU majoring in Computer
              Science with a strong passion for web development, software
              engineering, and teaching. I have experience working in the tech
              and fintech industry through my time at Mastercard and PayPal.
              Because of my background in learning languages, I am always
              willing to learn new technologies and languages in computer
              science, and I am always open to connecting with others!
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <h4 className="mt-12 text-2xl sm:text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <ul className="mt-6 flex flex-wrap gap-2 sm:gap-3">
              {techStack.map((el) => (
                <li
                  key={el.name}
                  className="flex items-center gap-2 py-1.5 px-3 bg-gray-100 text-gray-800 rounded-full text-sm sm:text-base"
                >
                  <img alt="" src={el.link} className="w-5 h-5 object-contain" />
                  {el.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
