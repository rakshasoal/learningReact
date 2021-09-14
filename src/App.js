import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import HelloClass from './component/HelloClass'
import react from 'react'
import Message from './component/Message'
import Counter from './component/Counter';
import { Component } from 'react';
import FuntionClick from './component/FuntionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind'
import ParentComponent from './component/ParentComponent';
import UserGreetings from './component/UserGreeting';

// function App() {
//   return (
//     <div>
//     <Hello name = "kern" heroName = "superMan"/>
//     <input type = "text" />
//     <Hello name = "raksha" heroName = "superMan"/>
//     <p>hello</p>
//     <Hello name = "vir" heroName = "superMan"/>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
    
      <div className="App">
      <UserGreetings />
          {/* <FuntionClick />
          <ClassClick /> */}
          {/* <ParentComponent /> */}
          {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
      {/* <Hello name = "kern">
      <input type = "text" /></Hello>
      <Hello name = "raksha"/>
      <p>hello</p>
      <Hello name = "vir"/>
  
      <HelloClass name1="sahraddha" /> */}
      </div>
    )
  }
}
export default App;
