import { useContext } from 'react';
import Card from '../components/Card';
import { ThemeContext } from '../themeProvider';
import friends360 from '../assets/friends360.png';
import owdle from '../assets/owdle.png';
import wuct from '../assets/wuct.jpeg';
import { useNavigate } from 'react-router-dom';
import liveLectureCompanion from '../assets/LiveLectureCompanion.jpg'

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();
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
            demoLink="https://youtube.com/shorts/PAdXFKgbf8U?si=Md0zYHXKbVTTZsfX" // update if needed
            githubURL="https://github.com/CoderNessim/Live_Lecture_Companion" // update if needed
            imageURL={liveLectureCompanion}
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
        </div>

        <button onClick={() => navigate("/all-projects")} className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:opacity-80 transition duration-150 ease-in-out mx-auto mt-4">
        Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projects;
