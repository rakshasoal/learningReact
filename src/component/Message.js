import React from "react";
import { Component } from "react";

class Message extends Component{
constructor(){
    super()
        this.state={
            message : "welcome Visitor"
        
    }
}
changeMessage(){
    this.setState({
      message:'Thank You for subscribing'
    })
}
    render(){
        return(

            <div>
<h1> {this.state.message} </h1>
<button onClick = {()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message