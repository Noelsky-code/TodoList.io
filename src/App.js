import React,{Component} from 'react';
import Templete from './templete.js'
import './App.css';
import {Input,Button,FormGroup} from 'reactstrap';


class App extends Component {
id=1

state={
  name:'',
  todos:[]
}

HandleChange =(e)=>{
  this.setState({
    name:e.target.value
  })

}

onKeyPress = (e) =>{
  e.key==='Enter'&&this.onClick()
}

onClick=(e)=>{
  this.setState({
    todos:this.state.todos.concat({id:this.id++,name:this.state.name,checked:false})
  })
  this.setState({
    name:''
  })
}

_Check = (id)=>{
  const todo = this.state.todos;
  const index = todo.findIndex(todo=> todo.id===id);
  const select = todo[index];

  this.setState({
    todos:[
      ...todo.slice(0,index),
      {
        ...select,
        checked:!select.checked
        
      },
      ...todo.slice(index+1,todo.length)
    ]
  })
  this.setState({
    name:''
  })


}

  render(){
  return (
    <div className="App">
      <Templete value={this.state.name} handle={this.HandleChange} 
      press={this.onKeyPress} click={this.onClick} todos={this.state.todos} check={this._Check}>
      </Templete>  
    </div>
    );
  }
}

export default App;
