import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdatedComponent from './withCounter'
  
class ClickCounter extends Component {
    
    render() {
        const {count, incrementCounter} = this.props
        return (
           <button onClick = {incrementCounter}>clicked {count} times </button>
        )
    }
}

export default withCounter(ClickCounter,5)
