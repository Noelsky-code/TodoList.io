import React,{Component} from 'react';
import {Input,Button,InputGroup,Form} from 'reactstrap';
import './App.css';
class In extends Component{
    
    
    render(){
        return(
         
        <InputGroup>
             <Input type="text" bsSize="sm" placeholder="입력하세요" value={this.props.value} onChange={this.props.handle} 
             onKeyPress={this.props.press}>
              </Input>
                <Button color="success"size="sm" onClick={this.props.click}>Add</Button>
        </InputGroup>
        
    );
    }

}

export default In;