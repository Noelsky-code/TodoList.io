import React,{Component} from 'react';
import './Todo.css';
import {Input,Button,FormGroup,ButtonGroup} from 'reactstrap';

class Todo extends Component {
 render(){

    return(
  
        <div className="Todo">
          <div className={this.props.checked? "Checked":"Text"}>{this.props.name}</div>
         <ButtonGroup className="Buttons">
          <Button align = "right" color = "success" size ="sm" onClick={()=>this.props.check(this.props.id)}>o</Button>
          <Button color ="danger" size ="sm" onClick={()=>this.props.delete(this.props.id)}>x</Button>
          </ButtonGroup>
        </div>
    );
  }
}

export default Todo;
