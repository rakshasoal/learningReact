import React from "react";

import { Component } from "react";

class UserGreetings extends Component{
constructor(props){
    super(props)
    this.state= {
isLoggedIn : true
    }
}
    render(){
return this.state.isLoggedIn && <div>welcome raksha</div>

//         return(
// (this.state.isLoggedIn)?<div>hello raksha</div>:<div>hello guest</div>
//         )
// let message
//         if(this.state.isLoggedIn){message="hello raksha"} else {message="hello guest"}
//         return(
//             <div>
//                 {message}
//             </div>
//         )
//         if(this.state.isLoggedIn){
//         return(<div>welcome raksha</div>)
// }
// else return(<div>welcome guest</div>)
//    
 }
}
export default UserGreetings