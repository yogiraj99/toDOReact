import React, {Component} from 'react';

class ToDoItem extends Component {
  constructor(props){
    super(props);
    this.state=props.state;
    this.toggleStatus=this.toggleStatus.bind(this);
    this.getTask = this.getTask.bind(this);
  }

  render() {
    return (
        <div className={"toDoItem"}>
          <h4 ref={"task"} className="task" onClick={this.toggleStatus}>{this.getTask()}</h4>
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
    this.props.update({task:this.refs.task.value,id:this.state.id,status:status});
      return this.state.status;
  }
}

export default ToDoItem
