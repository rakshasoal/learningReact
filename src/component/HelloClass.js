import React from "react";
import { Component } from "react";

class HelloClass extends Component{
    render(){
        const {name,heroName} = this.props
        return(
            <h1>Welcome {name}</h1>
        )
    }
}
export default HelloClass