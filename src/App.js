import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Guide from './Guide';
import CupCheck from './CupCheck';
import OpenHole from './OpenHole';
import { Connector } from 'mqtt-react-hooks';



function App(props) {
    return (
        
        <BrowserRouter>
            <Route path="/" component={Home} exact/>
            <Route path="/guide" component={Guide}/>
            <Route path="/outlet" component={OpenHole}/>
        </BrowserRouter>
       
        

    );
}

export default App;

