import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";

class ToDo extends Component {
  render() {
    return (<div>
      {this.props.state.toDoItems.map((i)=><ToDoItem state={i} key={`todoItem${i.id}`}/>)}
    </div>)
  }
}

export default ToDo
