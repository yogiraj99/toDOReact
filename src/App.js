import React, { Component } from 'react';
import ToDo from './ToDo';

let toDoItems = [{task:"Wake up early",
  status:true,id:21000},{task:"Have regular breaks",
  status:false,id:21001},{task:"Play carom",
  status:true,id:21002},{task:"Sleep Early",
  status:false,id:21003}];

let toDo={
  title:"My ToDo",
  status:false,
  toDoItems:toDoItems
};


class App extends Component {
  render() {
    return (
        <div className="App">
        <ToDo state={toDo}/>
      </div>
    );
  }
}

export default App;
