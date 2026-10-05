import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Experience from './views/Experience';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Contact from './views/Contact';
import { ThemeProvider } from './themeProvider';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
