import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.updateToDoItem = this.updateToDoItem.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.getAllToDoItems = this.getAllToDoItems.bind(this);
  }

  render() {
    return (
        <div className="toDo">
          <h1>{this.getTitle()}</h1>
          <ul>{this.getAllToDoItems()}</ul>
        </div>)
  }

  updateToDoItem(toDoItem) {
    let toDoItems = this.state.toDoItems;
    let oldToDoItem = toDoItems.find((item) => item.id === toDoItem.id);
    let toDoItemIndex = toDoItems.indexOf(oldToDoItem);
    toDoItems[toDoItemIndex] = toDoItem;
    this.setState({toDoItems:toDoItems});
    this.updateStatus();
  }

  getAllToDoItems() {
    let toDoItems = this.props.state.toDoItems;
    return toDoItems.map((item) => {
      return (<li key={`todoItem${item.id}`}>
        <ToDoItem state={item} update={this.updateToDoItem}/>
      </li>)
    })
  }

  updateStatus() {
    this.setState({status: false});
    if (this.areAllTasksDone()) {
      this.setState({status: true});
    }
  }

  areAllTasksDone() {
    return this.state.toDoItems.every((item) => item.status);
  }

  getTitle() {
    if (this.state.status) {
      return <del>{this.state.title}</del>;
    }
    return this.state.title;
  }
}

export default ToDo
