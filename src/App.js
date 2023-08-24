
import './App.css';
import Home from './Components/Home/Home'
import About2 from './Components/About2/About2';
import Service from './Components/Service/Service';
import Experience from './Components/Experience/Experience';
import Review from './Components/Reviews/Review';
import Choose from './Components/Why/Choose';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <div className="App">
    <Home></Home>
    <About2></About2>
     <Service></Service>
    <Experience></Experience>
    <Review></Review>
    <Choose></Choose>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
  
    </div>
  );
}

export default App;
