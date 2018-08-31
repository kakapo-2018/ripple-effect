import React from 'react';
import Sound from 'react-sound';
import songs from '../../public/sound_bites/songs';



export default class AmbientSound extends React.Component {
    constructor(props) {
      super(props);
    }

      render() {
        return (
          <Sound
            url= {songs[0]}
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
            />
        );
      }
    }
