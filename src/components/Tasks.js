import React, {Component} from 'react';

class Tasks extends Component {
  render() {
    return (
      <div className="Tasks">
        <li className="list-group-item">
               <span style={{textDecoration: this.props.todo.done ? 'line-through' : 'none'}}>
                 {this.props.todo.value}
              </span>
          <button
            onClick={() => this.props.handleClick(this.props.index)}>{this.props.todo.done ? 'Undo' : 'Complete'} </button>
        </li>
      </div>
    )
  }
}

export default Tasks;
