import React, { Component } from "react";
import {component} from 'react'

class Counter extends Component{
    constructor(props){
        super()
        this.state = {
count:0
        }
    }
    incrementCount(){
        this.setState({
            count:this.state.count+1
        })
        // this.state.count++;
        // console.log(this.state.count)
    }
    render(){
        return(
            <div>count = {this.state.count}
            <button onClick = {()=>{this.incrementCount()}}>+</button>
                </div>

        )        
    }
}
export default Counter