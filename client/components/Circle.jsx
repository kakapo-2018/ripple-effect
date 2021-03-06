import React from 'react'

export default class Circle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            r: 1,
            cx: this.props.cx,
            cy: this.props.cy,
            o: 1
        }
        this.tick = this.tick.bind(this)
    }
    tick() {
        let newRadius = this.state.r + 4
        let newOpacity = this.state.o - 0.01
        this.setState({
            r: newRadius,
            o: newOpacity
        })
        if (newOpacity <= 0) {
            this.componentWillUnmount();
        }
}
    componentDidMount() {
        this.timerID = setInterval(
            this.tick, 16
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        let num = 0;
        return (
            <React.Fragment>
                <circle className="circle" cx={this.state.cx} cy={this.state.cy} r={this.state.r} stroke="white" strokeWidth="4" fill="none" style={{opacity:this.state.o}}/>
                {/* {this.circInterval = setInterval(()=>{
                    num++;
                    <circle className="circle" cx={this.state.cx} cy={this.state.cy} r={this.state.r} stroke="blue" strokeWidth="2" fill="none" style={{opacity:this.state.o}}/>
                    {if(num>=5){
                        clearInterval(this.circInterval)
                    }}
                }, 200)} */}
            </React.Fragment>
        )
    }
}