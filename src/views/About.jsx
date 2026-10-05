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
              I&apos;m a self-taught web developer currently in my second year of
              university studying computer science. I have a passion for
              building web applications and websites that are both visually
              appealing and functional. Because of my background in learning
              languages, I am always willing to learn new technologies and
              languages in the evergrowing field of computer science. I am
              constantly seeking new opportunities to expand my knowledge and
              advance as a developer.
            </p>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-2xl sm:text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? 'mt-4 text-lg sm:text-xl text-gray-500'
                  : 'mt-4 text-lg sm:text-xl text-white'
              }
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites built for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView={'visible'}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-3 sm:px-4 bg-gray-50 rounded-lg flex items-center hover:scale-110 cursor-pointer min-w-0"
              >
                <img alt="" src={el.link} className="w-10 sm:w-12 shrink-0" />
                <h4 className="text-sm lg:text-base ml-3 sm:ml-4 min-w-0">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
