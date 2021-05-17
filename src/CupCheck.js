
import React, {Component} from 'react';
import Topbar from './components/Topbar';
import CheckGrid from './components/CheckGrid';
import { makeStyles } from '@material-ui/core/styles';
import './CupCheck.css';
import Button from '@material-ui/core/Button';

//const useStyles = makeStyles({});
class CupCheck extends Component{
    render(){
        return(
            <div className="CupCheck">
                <div className="CupCheck-article">
                    <Topbar/>
                    <p className="msg">다음 사항을 확인하여 재인식하기 바랍니다.</p>
                    
                    <CheckGrid/>
                    <Button
                        className="button" 
                        variant="outlined"
                        color="primary"
                        onClick={function(){
                            
                            alert('hi');

                        }}>인식하기</Button>
                </div>
            </div>
        
        );
    }
}

export default CupCheck;
