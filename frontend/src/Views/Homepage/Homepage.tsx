import './Homepage.css';
import HomeNav from '../../Components/Homepage/HomeNav';
import MediaContainer from '../../Components/Homepage/MediaContainer';
import AudioContainer from '../../Components/Homepage/AudioContainer';
import Footer from '../../Components/Homepage/Footer';
import MediaComponent from '../../Contexts/Homepage/MediaComponent';

function Homepage() {
    return (
        <>
            <HomeNav />
            <MediaComponent className="mediaComponent">
                <MediaContainer />                
                <AudioContainer />
                <Footer />
            </MediaComponent>
        </>
    );
}

export default Homepage;