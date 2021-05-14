import React, {Component} from 'react';
import Topbar from './components/Topbar';
import './UserCheck.css';
import logo from './images/logo192.png';
import Button from '@material-ui/core/Button';
class UserCheck extends Component{
    render(){
        return(
            <div className='UserCheck'>
                <Topbar/>
                <div className="UserCheck-article">
                    <p>빨대, 홀더, 뚜껑을 제거해주세요.</p>
                    <p>내용물을 세척해주세요.</p>
                    <p>컵을 아래 투입구에 넣은 후 '시작하기' 버튼을 눌러주세요. </p>
                    <div>
                        <img src={logo} alt="hi"></img>
                    </div>
                    <Button 
                        variant="outlined"
                        color="primary"
                        onClick={function(){
                            
                            alert('hi');

                        }}>시작하기</Button>

                </div>                                                                                                                                                      
            </div>
        );
    }
}

export default UserCheck;