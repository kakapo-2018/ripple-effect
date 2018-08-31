import React from 'react'
import Circle from "./Circle"
import SoundEffects from "./SoundEffects"
import AmbientSound from "./AmbientSound"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      x:0,
      y:0,
      circles: [],
      soundEffectsPlaying: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.addCircle = this.addCircle.bind(this)
    this.startSound = this.startSound.bind(this)
    this.stopSound = this.stopSound.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.addCircle()
    this.startSound()
  }

  addCircle() {
    let circles = [ ...this.state.circles ];
    circles.push(
      {cx: this.state.x, cy: this.state.y}
    )
    this.setState({circles});
  }

  startSound() {
    this.setState({soundEffectsPlaying: true});
  }

  stopSound() {
    this.setState({soundEffectsPlaying: false});
  }

  onMouseMove(e) {
    if(!this.state.soundEffectsPlaying) {
      this.setState({
        x: e.pageX,
        y: e.pageY
      })
    }
  }

  render() {
    return (
      <div style={{height: 100 + "vh"}} onMouseMove={this.onMouseMove.bind(this)} onClick={this.handleClick}>
        <svg style={{height: 100 + "vh", width: 100 + "%"}}>
          {this.state.circles.map((circle, i) => {
            return <Circle key={i} cx={circle.cx} cy={circle.cy}/>
          })}
        </svg>
        <SoundEffects playing={this.state.soundEffectsPlaying} onFinishedPlaying={this.stopSound}/>
        {/* <AmbientSound /> */}
      </div>
    )
  }
}

export default App