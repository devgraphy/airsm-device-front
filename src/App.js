import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import UserCheck from './UserCheck';
import CupCheck from './CupCheck';
import OpenHole from './OpenHole';

class App extends Component{
    render(){
        /*var phone = '';
        const add = function(input){
            phone.
        }*/
        return(
            <div>
             <Route path="/" component={Home} exact={true}/>
             <Route path="/guide" component={UserCheck}/>
             <Route path="/check" component={CupCheck}/>
             {/*<Route path="/open" component={OpenHole}/>*/}

s
            </div>
            
        );
    }      
}

export default App;