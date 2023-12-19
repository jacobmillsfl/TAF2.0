
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouteProps
} from 'react-router-dom';
import Homepage from './Views/Homepage/Homepage';
import About from './Views/About/About';
import MainNav from './Components/Navigation/MainNav';
import './App.css';
import MediaComponent from './Contexts/Homepage/MediaComponent';
import Footer from './Components/Footer/Footer';
import { AlbumComponent } from "./Views/Album/Album";
import LandingPage from "./Views/Homepage/LandingPage";
import Videos from "./Views/Videos/Videos";
import { MerchComponent } from './Views/Merch/Merch';
import { RegisterComponent } from './Views/Authentication/Register';
import { LoginComponent } from './Views/Authentication/Login';
import { AdminComponent } from './Views/Authentication/Admin';
import { LogOutComponent } from './Views/Authentication/LogOutComponent';
import Auth from './Utilities/Auth';


function App() {
  const isAuthenticated = Auth.isAuthenticated();

  return (
    <Router>
      <div className="App">
        <MediaComponent className="mediaComponent">
          <MainNav />
          <Routes>
              <Route path='/' element={< LandingPage />} />
              <Route path='/media' element={< Homepage />} />
              <Route path='/about' element={< About />} />
              <Route path='/albums' element={< AlbumComponent />} />
              <Route path='/videos' element={< Videos />} />
              <Route path='/merch' element={< MerchComponent />} />
              <Route
                path="/register"
                element={!isAuthenticated ? <RegisterComponent /> : <Navigate to="/admin" />
                }
              />
              <Route
                path="/login"
                element={!isAuthenticated ? <LoginComponent /> : <Navigate to="/admin" />
                }
              />
              <Route
                path="/admin"
                element={isAuthenticated ? <AdminComponent /> : <Navigate to="/login" />
                }
              /> 
              <Route
                path="/logout"
                element={isAuthenticated ? <LogOutComponent /> : <Navigate to="/login" />
                }
              /> 
          </Routes>
          <Footer />
        </MediaComponent>
      </div>
    </Router>
  );
}

export default App;