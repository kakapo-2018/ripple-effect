import React from 'react';
import Sound from 'react-sound';
import songs from '../../public/sound_bites/songs';



export default class SoundEffects extends React.Component {
  constructor(props) {
    super(props);
  }

  getRandomSongUrl() {
    // the random stuff
    let num = Math.floor(Math.random() * 10)
    return songs[num].url
  }

  render() {
    return (
      <Sound
        url={this.getRandomSongUrl()}
        playStatus={this.props.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={0 /* in milliseconds */}
        onFinishedPlaying={this.props.onFinishedPlaying}
        />
    );
  }
}
