import About from './component/about/About';
import Contact from './component/contact/Contact';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';
import Projects from './component/projects/Projects';
import Skills from './component/skills/Skills';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
