import React, { Component } from 'react'

 class LifeCycleMethod extends Component {
     constructor(props){
         super(props)
         this.state = {
             name:'raksha'
         }
         console.log('LIFE CYCLE B constructor')
     }

     static getDerivedStateFromProps(state, props){
        console.log('LIFE CYCLE B getDerivedStateFromProps')
     }
     componentDidMount(){
        console.log('LIFE CYCLE B  componentDidMount')
     }

     shouldComponentUpdate(){
        console.log('LIFE CYCLE B Should Component Update')
        return true;
     }

     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LIFE CYCLE Snappshot B before update')
        return null
     }

     componentDidUpdate(){
        console.log('LIFE CYCLE component B did  update')
     }

    render() {
        console.log('LIFE CYCLE B  render')
        return (
            <div>
                 LIFE CYCLE B
            </div>
        )
    }
}

export default LifeCycleMethod
