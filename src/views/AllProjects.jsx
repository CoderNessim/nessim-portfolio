import { useContext } from 'react';
import Card from '../components/Card';
import { ThemeContext } from '../themeProvider';
import weatherApp from '../assets/weatherApp.png';
import friends360 from '../assets/friends360.png';
import owdle from '../assets/owdle.png';
import languageBuddy from '../assets/LanguageBuddy.png';
import wuct from '../assets/wuct.jpeg';

const AllProjects = () => {
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
            title="WUCT Mobile App"
            description="Built a Flutter app for the WashU Chemistry Tournament to streamline event coordination and member communication using Firebase Messaging, Firestore, and Riverpod. Maintained app updates for 150+ users."
            demoLink="https://apps.apple.com/us/app/wuct/id6739588241" // update if needed
            githubURL="https://apps.apple.com/us/app/wuct/id6739588241" // update if needed
            imageURL={wuct}
            imageWidth="50%"
            imageHeight="500px"
          />

          <Card
            title="Live Lecture Companion"
            description="An app that captures real-time audio to be used in a lecture. Sends 10-second segments to a custom LLM for insights. This LLM filters out unimportant information and only displays useful summaries."
            demoLink="https://apps.apple.com/us/app/wuct/id6739588241" // update if needed
            githubURL="https://apps.apple.com/us/app/wuct/id6739588241" // update if needed
            imageURL={wuct}
            imageWidth="50%"
            imageHeight="500px"
          />

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
      </div>
    </div>
  );
};

export default AllProjects;
