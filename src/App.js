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
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet';
import Inline from './component/Inline';
import Form from './component/Form';
import LifeCycleMethod from './component/LifeCycleMethod';
import LifeCycleB from './component/LifeCycleB'
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import Refs from './component/Refs';
import FocusRef from './component/FocusRef';
import FRParentInput from './component/FRParentInput';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import User from './component/User';
import ClickCounterTwo from './component/ClickCounterTwo';
import CounterTwo from './component/CounterTwo';
import HttpProject from './component/HttpProject';

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
     <HttpProject />
      {/* <CounterTwo render = {(count, incrementCounter) => (
        <ClickCounterTwo count= {count} incrementCounter= {incrementCounter} />
      )}
      /> */}
        {/* <ClickCounterTwo />
        <User render = {(isLoggedIn)=>isLoggedIn?'raksha':'Guest'}/> */}
      {/* <ClickCounter name = "raksha"/>
      
      <HoverCounter name = "Kern"/> */}
        {/* <FRParentInput /> */}
        {/* <Form /> */}
        {/* <FocusRef /> */}
        {/* <Refs /> */}
        {/* <Table /> */}
     {/* <FragmentDemo /> */}
        {/* <LifeCycleMethod /> */}
        {/* <Inline /> */}
        {/* <StyleSheet primary = 'false' /> */}
      {/* <UserGreetings /> */}
          {/* <NameList /> */}
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
