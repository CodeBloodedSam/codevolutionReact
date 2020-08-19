import React from "react";
import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Hello from "./components/Hello";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./UserGreeting";
import NameList from "./NameList";

function App() {
  return (
    <div className="App">
      <NameList></NameList>
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Mike" heroName="Batman">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Diane" heroName="Wonder Woman">
        <button>Action!</button>
      </Greet>
      <Greet name="Omashola" heroName="Superman" />
      <hr></hr>
      <Welcome name="Diane" heroName="Wonder Woman" />
      <Welcome name="Omashola" heroName="Superman" /> */}
      {/* <Greet name="Mike" heroName="Batman" /> */}
      {/* <Welcome name="Omashola" heroName="Superman" /> */}
    </div>
  );
}

export default App;
