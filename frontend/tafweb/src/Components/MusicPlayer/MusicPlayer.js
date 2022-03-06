import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSongs() {
    return ['https://tafers.net/files/AbyssOfBliss.mp3'
      , 'https://tafers.net/files/Audacity2.mp3'
      , 'https://tafers.net/files/AudacityNew.mp3'
      , 'https://tafers.net/files/BeneathTheExoskeleton.mp3'
      , 'https://tafers.net/files/BJCGroove01_DumEdit_mp3_20200815.mp3'
      , 'https://tafers.net/files/BJCGroove01.mp3'
      , 'https://tafers.net/files/BringItBack.mp3'
      , 'https://tafers.net/files/CornerSpaces.mp3'
      , 'https://tafers.net/files/Credence.mp3'
      , 'https://tafers.net/files/DarkMarrow2.mp3'
      , 'https://tafers.net/files/DayInTheLife.mp3'
      , 'https://tafers.net/files/DiscoverTheBreakthrough.mp3'
      , 'https://tafers.net/files/Divinity.mp3'
      , 'https://tafers.net/files/DivinityOutro.mp3'
      , 'https://tafers.net/files/EndemicRancor.mp3'
      , 'https://tafers.net/files/Entropy.mp3'
      , 'https://tafers.net/files/fallen.mp3'
      , 'https://tafers.net/files/HEAVEN LIGHT MY CANDLE_20200712_ClaytonDrumEdit_mp3.mp3'
      , 'https://tafers.net/files/HeavenLightMyCandle.mp3'
      , 'https://tafers.net/files/Iatrophobia.mp3'
      , 'https://tafers.net/files/Indigo Eye.mp3'
      , 'https://tafers.net/files/Jam Chamber.mp3'
      , 'https://tafers.net/files/JamChamber.mp3'
      , 'https://tafers.net/files/JamChamberVoxScratch.mp3'
      , 'https://tafers.net/files/Jumping It Up_DrumEdit_20200830_mp3.mp3'
      , 'https://tafers.net/files/Jumping It Up.mp3'
      , 'https://tafers.net/files/LoveAndTry.mp3'
      , 'https://tafers.net/files/MyKin.mp3'
      , 'https://tafers.net/files/Otherside.mp3'
      , 'https://tafers.net/files/ReggaeSession01.mp3'
      , 'https://tafers.net/files/ReggaeSong.mp3'
      , 'https://tafers.net/files/Rudimentary_Clayton_DrumEdit_20200713_mp3.mp3'
      , 'https://tafers.net/files/RudimentaryTeaser.mp3'
      , 'https://tafers.net/files/SomethingAboutUs.mp3'
      , 'https://tafers.net/files/StarChild.mp3'
      , 'https://tafers.net/files/StateOfMind.mp3'
      , 'https://tafers.net/files/StateOfMindVoxScratch.mp3'
      , 'https://tafers.net/files/synthwave.mp3'
      , 'https://tafers.net/files/The Distance Between Us_DrumEdit_20200830_mp3.mp3'
      , 'https://tafers.net/files/The Distance Between Us.mp3'
      , 'https://tafers.net/files/ThinkWithYourHeart.mp3'
      , 'https://tafers.net/files/TrifoldEcstacy.mp3'
      , 'https://tafers.net/files/Vinculum_DrumEdit_20200523_mp3.mp3'
      , 'https://tafers.net/files/Vinculum_DrumEdit_20200712_mp3.mp3']
}

  render() {

    const song_list = this.getSongs();

    return (
      <div>
        <Table responsive="sm" style={musicPlayer}>
          <thead style={{ position: "absolute", display: "contents" }}>
            <tr>
              <th>Artist</th>
              <th>Song</th>
            </tr>
          </thead>
          <tbody style={musicPlayerBody}>
            {
            song_list.map((song, index) => ( 
              <tr key={index}>
                <td>TAF</td>
                <td>{song}</td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

const musicPlayer = {
  color: 'white',
  maxHeight: "600px",
  display: "inline-block",
}

const musicPlayerBody = {
  overflowY: "auto",
  maxHeight: "575px",
  display: "inline-block",
}


export default MusicPlayer;