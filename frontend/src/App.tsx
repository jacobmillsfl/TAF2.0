
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
import Promo from "./Views/Promo/Promo";
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
            <Route path='/' element={< LandingPage />}></Route>
            <Route path='/media' element={< Homepage />}></Route>
            <Route path='/vibe' element={< Visuals />}></Route>
            <Route path='/about' element={< About />}></Route>
            <Route path='/albums' element={< Promo />}></Route>
            <Route path='/videos' element={< Videos />}></Route>
            <Route path='/merch' element={< MerchComponent />}></Route>
          </Routes>
          <Footer />
        </MediaComponent>
      </div>
    </Router>
  );
}

export default App;