import React, {Component} from 'react';

class TodoList extends Component{
    render(){
        //console.log(this.props);
        return(
            <ul style={{listStyle: 'none'}}>
                {this.props.items.map(item =>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }

}

export default TodoList;