import React, { Component } from 'react';

import Tasks from './Tasks';

class List extends Component{
    render(){
        return(
            <div className="List">
                {this.props.todos.map((todo,index) =>{
                    return (
                        <Tasks
                            key={index}
                            todo={todo}
                            handleClick={this.props.handleClick}
                            index={index}
                        />
                    )
                })}
            </div>
        )
    }
}

export default List;