import React from 'react';
import './OpenHole.css';
import Topbar from './components/Topbar';
import './Home.css'
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://13.208.94.244:9001');
client.subscribe("rasp/material");

function OpenHole(props, {history}) {
    client.on("message", function (topic, payload) {    // mqtt 메시지는 object 타입
        alert([topic, payload].join(": "));
        history.push('/point');  
        client.end()
      });
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


