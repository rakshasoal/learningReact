import React, { Component } from 'react'
import Refs from './Refs'

class FocusRef extends Component {
    constructor(props){
        super()
        this.inputRef = React.createRef()
    }
    clickHandler = ()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <Refs  />
                <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusRef
