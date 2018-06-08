import React, {Component} from 'react';

class ToDoItem extends Component {
  render() {
    return <div className={"toDoItem"}>
      <input type={"checkbox"} checked={this.props.state.status} readOnly={true}/>
      <p>{this.props.state.task}</p>
    </div>
  }
}

export default ToDoItem
