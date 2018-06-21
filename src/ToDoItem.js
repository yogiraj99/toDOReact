import React, {Component} from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.toggleStatus = this.toggleStatus.bind(this);
    this.getTask = this.getTask.bind(this);
    this.showTaskToEdit = this.showTaskToEdit.bind(this);
    this.editTask = this.editTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  render() {
    return (
        <div className={"toDoItem"} id={"toDoItem" + this.state.id}>
          <h4 className="task" ref="taskHeader" onClick={this.toggleStatus}>{this.getTask()}</h4>
          <button onClick={this.showTaskToEdit} ref="editButton" className="editButton">edit</button>
          <input value={this.state.task} ref={"task"} name="task" className="taskInput" onChange={this.editTask}/>
          <button onClick={this.saveTask} ref="saveButton" className="saveButton">Save</button>
        </div>
    )
  }

  getTask() {
    if (this.state.status) {
      return <del>{this.state.task}</del>
    }
    return this.state.task;
  }

  toggleStatus() {
    let status = !this.state.status;
    this.setState({status: status});
    this.props.update({task: this.state.task.value, id: this.state.id, status: status});
    return this.state.status;
  }

  editTask() {
    let task = this.refs.task.value;
    this.setState({task: task});
    this.props.update({task: this.refs.task.value, id: this.state.id, status: this.state.status});
    return this.state.status;
  }

  showTaskToEdit() {
    this.refs.task.style.display = "block";
    this.refs.saveButton.style.display = "block";
    this.refs.taskHeader.style.display = "none";
    this.refs.editButton.style.display = "none";
  }

  saveTask() {
    this.setState({task: this.refs.task.value});
    this.refs.task.style.display = "none";
    this.refs.saveButton.style.display = "none";
    this.refs.taskHeader.style.display = "block";
    this.refs.editButton.style.display = "block";
  }
}

export default ToDoItem
