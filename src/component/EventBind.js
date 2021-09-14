import { Component } from "react";

class EventBind extends Component{
   constructor(props){
       super()
       this.state={
           message:'hello'
       }
    //    this.changeMessage = this.changeMessage.bind(this)
   }
//    changeMessage(){
//        this.setState({
//            message:'goodbye'
//        })
//    }
   changeMessage = () =>{
       this.setState({
           message:'good bye'
       })
   }
    render(){
        return(
            <>
            <div>{this.state.message}</div>
            <button onClick = {this.changeMessage}>Click</button>
            {/* <button onClick = {this.changeMessage.bind(this)}>Click</button> */}
            {/* <button onClick = {()=> this.changeMessage()}>Click</button> */}
            </>
        )
    }
}
export default EventBind