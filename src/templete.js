import React,{Component} from 'react';
//import logo from './logo.svg';
import './templete.css';
import In from './In';

class Templete extends Component{
    render(){

        return(
            <main className="Templetes">
                <div className="Title">
                    Todo List
                </div>
                <div className="Input">
                    <In/>
                </div>
            </main>
        );
    }
  
}

export default Templete;
