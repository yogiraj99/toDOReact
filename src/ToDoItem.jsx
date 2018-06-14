import React, {Component} from 'react';

class ToDoItem extends Component {
  constructor(props){
    super(props);
    this.state=props.state;
    this.toggleStatus=this.toggleStatus.bind(this);
    this.getTask = this.getTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.showTaskToEdit = this.showTaskToEdit.bind(this);
  }

  render() {
    return (
        <div className={"toDoItem"} id={"toDoItem"+this.state.id}>
          <h4 className="task" onClick={this.toggleStatus}>{this.getTask()}</h4>
          <button onClick={this.showTaskToEdit} className="editButton">edit</button>
          <input value={this.state.task} ref={"task"} name="task" className="taskInput" onChange={this.editTask}/>
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
    let status=!this.state.status;
    this.setState({status:status});
    this.props.update({task:this.state.task.value,id:this.state.id,status:status});
      return this.state.status;
  }
  editTask() {
    let task = this.refs.task.value;
    this.setState({task: task});
    this.props.update({task: this.refs.task.value, id: this.state.id, status: this.state.status});
    return this.state.status;
  }

  showTaskToEdit() {
    let selectionQuery = "#toDoItem" + "" + this.state.id;
    let task = document.querySelector(selectionQuery + " input[name='task']");
    task.style.display = "block";
    let taskHeader = document.querySelector(selectionQuery+ " h4");
    taskHeader.style.display = "none";
    let editButton = document.querySelector(selectionQuery+ " button");
    editButton.style.display = "none";
  }
}

export default ToDoItem
