import React,{Component} from 'react';
//import logo from './logo.svg';
import './templete.css';
import In from './In';
import List from './List.js'
import {Input,Button,FormGroup} from 'reactstrap';

class Templete extends Component{
    render(){
        return(
            <main className="Templetes">
                <div className="Title">
                    Todo List
                </div>
                <div className="Input">
                    <In value={this.props.value} handle ={this.props.handle} 
                    press={this.props.press} click={this.props.click}/>
                </div>
                <div className="List">
                    <List todos={this.props.todos}/>
                </div>
            </main>
        );
    }
  
}

export default Templete;
