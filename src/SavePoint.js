import React from 'react';
import './SavePoint.css';
import Topbar from './components/Topbar';
import './Home.css'
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://13.208.94.244:9001');
client.subscribe("rasp/count");

function OpenHole(props) {
    client.on("message", function (topic, payload) {    // mqtt 메시지는 object 타입
        alert([topic, payload].join(": "));
        client.end()
      });
    return (
        <div>
            <div className='SavePoint'>
                <Topbar/>
                <div className="SavePoint-article">
                    <div align="center" className="msg"> 포인트가 적립되었습니다. </div>

                </div>
            </div>
        </div>
    );
}

export default OpenHole;

// location 의 props로 넘어온 키의 값은 DataView 객체가 넘어옴


