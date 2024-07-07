import { useContext } from 'react';
import Card from '../components/Card';
import { ThemeContext } from '../themeProvider';
import weatherApp from '../assets/weatherApp.png';
import friends360 from '../assets/friends360.png';
import owdle from '../assets/owdle.png';
import languageBuddy from '../assets/LanguageBuddy.png';

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  //const Card = ({ imageURL, title, description, demoLink, githubURL }) => {

  return (
    <div
      id="projects"
      className={darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card
            title="Friends 360"
            description="a web platform made for friend group map-tracking, plan making, and messaging. Includes many features that a friend group may need to plan events and keep in touch."
            githubURL="https://github.com/CoderNessim/Friends360"
            demoLink="https://github.com/CoderNessim/Friends360"
            imageURL={friends360}
          />
          <Card
            title="OWdle"
            description="An overwatch version of wordle made more competitive by adding leaderboards, user profiles, match history, and more."
            demoLink="https://overwatchdle.netlify.app"
            githubURL="https://github.com/CoderNessim/OWdle"
            imageURL={owdle}
          />
          <Card
            title="Language Buddy"
            demoLink="https://translator-app-nessim.netlify.app"
            description="An app designed to help others learn languages, featuring a translator, a sentence/word generator powered by ChatGPT, a similarity score for translation accuracy, and a customizable flashcard maker."
            imageURL={languageBuddy}
            githubURL="https://github.com/CoderNessim/LanguageBuddy/tree/main"
          />
          <Card
            title="Simple Weather App"
            description="My first project which displays data regarding the current weather at a user's current location, can also be used to display weather data for any city in the world."
            demoLink="https://main--nessim-weather-app.netlify.app/"
            githubURL="https://github.com/CoderNessim/weatherApp"
            imageURL={weatherApp}
          />
        </div>

        {/* <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default Projects;
