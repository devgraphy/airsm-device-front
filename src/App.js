import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import Topbar from './components/Topbar';
import NestedGrid from './components/GridButton';
import ComposedTextField from './components/TextField';
import './App.css'


class App extends Component{
    render(){
        
        return(
            <div className='App'>
                <Topbar/>
                <div className="App-article">
                    <div className="msg"> 휴대폰 번호를 입력해주세요. </div>
                    
                    <NestedGrid/>
                    <ComposedTextField/>
                    <Button variant="outlined" color="primary">확인</Button>
                </div>
            </div>
            
        );
    }
}
export default App;
