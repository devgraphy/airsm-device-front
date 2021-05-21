import React from 'react';
import Topbar from './components/Topbar';
import './Guide.css';
import logo from './images/logo192.png';
import Button from '@material-ui/core/Button';
import mqtt from 'mqtt';

const options = {
    protocol:'mqtts',
}

const client = mqtt.connect('mqtt://13.208.94.244:1883',options);
console.log(client)
function Guide(props) {
    // client.on("connect",()=>{
    //     console.log("connected"+client.connected);
    // });
    
    // function publish(message){
    //     client.publish("webdata/camera","hey")
    // }
    return (
        <div>
            <div className='Guide'>
                <Topbar/>
                <div className="Guide-article">
                    
                    <p>빨대, 홀더, 뚜껑을 제거해주세요.</p>
                    <p>내용물을 세척해주세요.</p>
                    <p>컵을 아래 투입구에 넣은 후 '시작하기' 버튼을 눌러주세요. </p>
                    <div>
                        <img src={logo} alt="hi"></img>
                    </div>
                    <Button 
                        variant="outlined"
                        color="primary"
                        >인식하기</Button>

                </div>                                                                                                                                                      
            </div>
        </div>
    );
}

export default Guide;