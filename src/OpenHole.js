import React, {Component} from 'react';
import './OpenHole.css';


import Topbar from './components/Topbar';

import './Home.css'

function OpenHole(props) {
    return (
        <div>
            <div className='OpenHole'>
                <Topbar/>
                <div className="OpenHole-article">
                    <div align="center" className="msg"> {props.location.mat} 배출구에 플라스틱 컵을 넣어주세요. </div>

                </div>
            </div>
        </div>
    );
}

export default OpenHole;

// location 의 props로 넘어온 키의 값은 DataView 객체가 넘어옴


