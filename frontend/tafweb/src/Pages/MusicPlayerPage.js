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
    this.onToggleVideo = this.onToggleVideo.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate()
  {

  }

  componentDidMount()
  {
    let videoElement = document.getElementById("videoBackground");
    videoElement.playbackRate = 1.0; // Nice and slow
  }

  componentWillUnmount()
  {
  }

  onToggleVideo(playing)
  {
    console.log("TOGGLE VIDEO", playing);
    let videoElement = document.getElementById("videoBackground");
    if (playing) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
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
          <MusicPlayer onToggleVideo={this.onToggleVideo} />
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