
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Home from './components/home/Home';
import Projects from './projects/Projects';

function App() {
  return (
 
    <div>
           <Navbar/> 
           <Home/>
           <About/>
           <Projects/>

    </div>

  );
}

export default App;
