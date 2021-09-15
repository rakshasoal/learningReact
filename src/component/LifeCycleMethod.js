import React, { Component } from 'react'
import LifeCycleB from '../component/LifeCycleB'

 class LifeCycleMethod extends Component {
     constructor(props){
         super(props)
         this.state = {
             name:'raksha'
         }
         console.log('LIFE CYCLE A constructor')
     }

     static getDerivedStateFromProps(state, props){
        console.log('LIFE CYCLE getDerivedStateFromProps')
     }
     componentDidMount(){
        console.log('LIFE CYCLE  componentDidMount')
     }
    shouldComponentUpdate(){
        console.log('LIFE CYCLE Should Component Update')
        return true
     }

     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LIFE CYCLE Snappshot before update')
        return null
     }

     componentDidUpdate(){
        console.log('LIFE CYCLE component did  update')
   
     }

     changeState =() => {
         this.setState({name:'shetty'})
     }
    render() {
        console.log('LIFE CYCLE  render')
        return (
            <div>
                 LIFE CYCLE A
                 <button onClick = {this.changeState}> CHANGE STATE </button>
                 <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleMethod
