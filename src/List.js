import React,{Component} from 'react';
import './List.css';
import Todo from './Todo.js'
import {Input,Button,FormGroup} from 'reactstrap';

class List extends Component {
 
  render(){
    return(
        <div className="Lists">
          {this.props.todos.map(
            ({id,name,checked}) =>(
               <Todo id={id} key={id} name={name} check={this.props.check} checked={checked}/>
                    )
             )
       } </div>
    );
  }
}

export default List;
