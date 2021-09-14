import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log("class click")
    }
     render() {
      
        return (
            <div>
             <button onClick ={this.clickHandler}>CLICK ME</button>   
            </div>
        )
    }
}

export default ClassClick
