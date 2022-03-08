import React, { Component, useState, useEffect } from 'react';

class Music extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      play: false,
      audio: new Audio(this.props.url)
    }
  }



  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {      
      this.state.play = false;
      this.state.audio.pause();
      this.setState((state) => {
        return {audio: new Audio(this.props.url)};
      });
    }
  }

  componentDidMount() {
    this.state.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.state.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.state.audio.play() : this.state.audio.pause();
      //this.props.onToggle(this.state.play);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        <div>
          Now Playing: {this.state.audio.src}
        </div>
      </div>
    );
  }
}



export default Music;