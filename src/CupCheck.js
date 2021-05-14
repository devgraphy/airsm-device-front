
import React, {Component} from 'react';
import Topbar from './components/Topbar';
import CheckGrid from './components/CheckGrid';
import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles({});
class CupCheck extends Component{
    render(){
        return(
            <React.Fragment>
                <Topbar/>
                <div>다음 사항을 확인하여 재인식하기 바랍니다.</div>
                <div></div>
                <CheckGrid/>
            </React.Fragment>
        
        );
    }
}

export default CupCheck;
