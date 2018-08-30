import React from 'react'

export default class Circle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            r: 50,
            cx: this.props.cx,
            cy: this.props.cy
        }
    }

    render() {
        return (
            <React.Fragment>
                <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} fill="red" />
            </React.Fragment>
        )
    }
}