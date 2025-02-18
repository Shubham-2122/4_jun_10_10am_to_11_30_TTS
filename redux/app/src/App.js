import React from "react";
import Counter from "./features/counter/Counter";
import Counter2 from "./features/counter/Counter2";
import Addtodo from "./features/Todo/Addtodo";
import Todolist from "./features/Todo/Todolist";

function App() {
  return (
    <div className="App">
      <h1>Hello this app data</h1>
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      <Addtodo />
      <Todolist />
    </div>
  );
}

export default App;
