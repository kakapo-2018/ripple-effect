import React from 'react';
import Sound from 'react-sound';
// import songs from '../../public/ambientSound'; //change to actual folder with mp3 file


export default class AmbientSound extends React.Component {
    constructor(props) {
      super(props);
    }

      render() {
        return (
          <Sound
            url="./ambientSound/song.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
            />
        );
      }
    }
