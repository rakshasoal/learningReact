import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
   
    render() {
        return (
            <div>
            <button onClick = {this.incrementCounter}>clicked {this.state.count} times</button>     
            </div>
        )
    }
}

export default ClickCounterTwo
