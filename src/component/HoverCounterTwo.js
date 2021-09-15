import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
   
    render() {
        return (
            <div>
            <h1 onMouseOver = {this.incrementCounter}>Hovered {this.state.count} times</h1>     
            </div>
        )
    }
}

export default ClickCounterTwo
