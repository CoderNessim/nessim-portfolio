import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from './views/Contact';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import Services from './views/Services';
import Projects from './views/Projects';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './themeProvider';
import AllProjects from './views/AllProjects';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) return <LoadingScreen />;

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
                <Services />
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
