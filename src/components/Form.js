import React, {Component} from 'react';

class Form extends Component {

  render() {
    return (
      <div className="Form">
        <form onSubmit={(evt) => this.props.handleSubmit(evt)}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-primary text-white" id="basic-addon3">Add Todos</span>
            </div>
            <input className="form-control search-bar" type="text"
                   onChange={(evt) => this.props.handleChanges(evt)}
                   value={this.props.inputValue}/>
          </div>
        </form>
      </div>
    )
  }

}

export default Form;
