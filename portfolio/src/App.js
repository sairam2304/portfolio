import logo from './logo.svg';
import './App.css';
import './custom.css';
import { Navbar } from './components/Navbar';
import {HeroAbout} from './components/Heroabout';
import { Experience } from './components/Experience';
import { Projects } from './components/projects';
import {Skills} from './components/skills';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="font-sans">
  <Navbar />
  <HeroAbout />
  <Experience />
  <Projects />
   <Skills />
  {/* <Contact /> */}
  <Footer />
</div>
  );
}

export default App;
