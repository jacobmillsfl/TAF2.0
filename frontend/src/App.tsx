
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
import { AlbumComponent } from "./Views/Album/Album";
import LandingPage from "./Views/Homepage/LandingPage";
import Videos from "./Views/Videos/Videos";
import { MerchComponent } from './Views/Merch/Merch';

function App() {
  return (
    <Router>
      <div className="App">
        <MediaComponent className="mediaComponent">
          <MainNav />
          <Routes>
              <Route path='/' element={< LandingPage />} />
              <Route path='/media' element={< Homepage />} />
              <Route path='/vibe' element={< Visuals />} />
              <Route path='/about' element={< About />} />
              <Route path='/albums' element={< AlbumComponent />} />
              <Route path='/videos' element={< Videos />} />
              <Route path='/merch' element={< MerchComponent />} />
          </Routes>
          <Footer />
        </MediaComponent>
      </div>
    </Router>
  );
}

export default App;