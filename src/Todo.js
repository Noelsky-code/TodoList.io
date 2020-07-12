import React,{Component} from 'react';
import './Todo.css';
import {Input,Button,FormGroup,ButtonGroup} from 'reactstrap';

class Todo extends Component {
 render(){
    return(
  
        <div className="Todo">
          <div className="Text">{this.props.name}</div>
         <ButtonGroup className="Buttons">
          <Button align = "right" color = "success" size ="sm">o</Button>
          <Button color ="danger" size ="sm">x</Button>
          </ButtonGroup>
        </div>
    );
  }
}

export default Todo;
