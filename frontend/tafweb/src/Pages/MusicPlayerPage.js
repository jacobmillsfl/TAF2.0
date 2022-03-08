import React, { Component, useState, useEffect } from 'react';
import MiddleFrame from '../Components/MiddleFrame';
import MusicPlayer from '../Components/MusicPlayer/MusicPlayer';
import CyberBackground from "../media/cyber_02.mp4";

class MusicPlayerPage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      videoPlaying: false
    }
  }

  componentDidUpdate(prevProps)
  {
    console.log("MusicPlayerPage",prevProps);
    if (prevProps.videoPlaying !== this.state.videoPlaying) {      

      let videoElement = document.getElementById("videoBackground");
      if (this.state.videoPlaying) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      this.setState((state) => {
        return {videoPlaying: !this.state.videoPlaying}
      });
    }
  }

  componentDidMount()
  {
    let videoElement = document.getElementById("videoBackground");
    videoElement.playbackRate = 1.0; // Nice and slow
  }

  componentWillUnmount()
  {
  }

  onToggle(playing)
  {
    this.setState({ videoPlaying: playing });
  }

  render()
  {
    return (
      <div>
        <center>
          <video autoPlay muted loop id="videoBackground" style={ videoElementStyle }>
            <source src={ CyberBackground } type="video/mp4" />
          </video>
        </center>
        <MiddleFrame>
          <MusicPlayer onToggle={this.onToggle} />
        </MiddleFrame>
      </div>
    );
  }
}

const videoElementStyle = {
  display: "block",
  position: "absolute",
  right: "auto",
  minWidth: "100%",
  minHeight: "100%",
}

export default MusicPlayerPage;