import React, {Component} from 'react';


import Topbar from './components/Topbar';

import './Home.css'


class OpenHole extends Component{
    render(){

        return(
            <div className='OpenHole'>
                <Topbar/>
                <div className="OpenHole-article">
                    <div className="msg"> OO 배출구에 플라스틱 컵을 넣어주세요. </div>
                </div>
            </div>
            
        );
    }
}
export default OpenHole;
