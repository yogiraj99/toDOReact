import React, {Component} from 'react';
import ToDo from './ToDo';

let toDoItems = [{
  task: "Wake up early",
  status: true, id: 21000
}, {
  task: "Have regular breaks",
  status: false, id: 21001
}, {
  task: "Play carom",
  status: true, id: 21002
}, {
  task: "Sleep Early",
  status: false, id: 21003
}];

let toDo = {
  title: "My To Do",
  status: false,
  toDoItems: toDoItems
};


let toDoItems2 = [{
  task: "Go for walk",
  status: false, id: 22000
}, {
  task: "Have food regularly",
  status: true, id: 22001
}, {
  task: "Work with react",
  status: false, id: 22002
}];

let toDo2 = {
  title: "Not My To Do",
  status: false,
  toDoItems: toDoItems2
};


class App extends Component {
  render() {
    return (
        <div className="App">
          <ToDo state={toDo}/>
          <ToDo state={toDo2}/>
      </div>
    );
  }
}

export default App;
