import React,{Component} from 'react';
import './Todo.css';
import {Input,Button,FormGroup} from 'reactstrap';

class Todo extends Component {
 render(){
   console.log(this.props)
    return(
        <div className="Todo">{this.props.name}</div>
    );
  }
}

export default Todo;
