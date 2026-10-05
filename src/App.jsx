import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from './views/Contact';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import Experience from './views/Experience';
import Projects from './views/Projects';
import { ThemeProvider } from './themeProvider';
import AllProjects from './views/AllProjects';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
