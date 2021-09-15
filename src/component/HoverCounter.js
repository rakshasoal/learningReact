import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
   

    render() {
        const {count, incrementCounter} = this.props
        return (
            <div>
            <h1 onMouseOver= {incrementCounter} >{this.props.name} HOVERED {count} TIMES</h1>    
            </div>
        )
    }
}

export default withCounter(HoverCounter,10)
