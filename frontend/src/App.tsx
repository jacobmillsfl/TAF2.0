
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './Views/Homepage/Homepage';
import About from './Views/About/About';
import MainNav from './Components/Navigation/MainNav';
import './App.css';
import MediaComponent from './Contexts/Homepage/MediaComponent';
import Footer from './Components/Footer/Footer';
import Visuals from "./Views/Visuals/Visuals";

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />        
        <MediaComponent className="mediaComponent">
          <Routes>
              <Route path='/' element={< Homepage />}></Route>
              <Route path='/visuals' element={< Visuals />}></Route>
              <Route path='/about' element={< About />}></Route>
          </Routes>
          <Footer />
        </MediaComponent>
      </div>
    </Router>
  );
}

export default App;