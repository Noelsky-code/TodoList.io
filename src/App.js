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
    todos:this.state.todos.concat({id:this.id++,name:this.state.name})
  })
  this.setState({
    name:''
  })
}

  render(){
  return (
    <div className="App">
      <Templete value={this.state.name} handle={this.HandleChange} 
      press={this.onKeyPress} click={this.onClick} todos={this.state.todos} >
      </Templete>  
    </div>
    );
  }
}

export default App;
