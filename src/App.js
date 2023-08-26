
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
 
    <div>
           <Navbar/> 
           <Home/>
           <About/>
           <Projects/>
           <Skills/> 
    </div>

  );
}

export default App;
