import './Homepage.css';
import HomeNav from '../../Components/Homepage/HomeNav';
import MediaContainer from '../../Components/Homepage/MediaContainer';
import AudioContainer from '../../Components/Homepage/AudioContainer';
import Layer2 from '../../Components/Homepage/Footer';
import Layer3 from '../../Components/Homepage/Layer3';
import Layer4 from '../../Components/Homepage/Layer4';
import Footer from '../../Components/Homepage/OldFooter';
import MediaComponent from '../../Contexts/Homepage/MediaComponent';

function Homepage() {
    return (
        <>
            <HomeNav />
            <MediaComponent className="mediaComponent">
                <MediaContainer />                
                <AudioContainer />
            </MediaComponent>
        </>
    );
}

export default Homepage;