import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
   constructor(props){
       super(props)
this.state = {
    parentName:'parent'
}
this.greetParents = this.greetParents.bind(this)
   }
   
   greetParents(childName){
      alert (`Hello ${this.state.parentName} from ${childName}`)
   }
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParents}/>
            </div>
        )
    }
}

export default ParentComponent
