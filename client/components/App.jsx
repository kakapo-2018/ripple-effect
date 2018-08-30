import React from 'react'
import Circle from "./Circle"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      x:0,
      y:0,
      circles: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    let circles = this.state.circles;
    circles.push(
      {cx: this.state.x, cy: this.state.y}
    )
    this.setState({circles});
  }

  onMouseMove(e) {
    this.setState({
      x: e.pageX,
      y: e.pageY
    })
  }

  render() {
    return (
      <div style={{height: 100 + "vh"}} onMouseMove={this.onMouseMove.bind(this)} onClick={this.handleClick}>
        <svg style={{height: 100 + "vh", width: 100 + "%"}}>
          {this.state.circles.map((circle, i) => {
            return <Circle key={i} cx={circle.cx} cy={circle.cy}/>
          })}
        </svg>
      </div>
    )
  }
}

export default App