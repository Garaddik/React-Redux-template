import React,{Component} from 'react'
import {Button,Icon} from 'semantic-ui-react'
import './DashBoardHeader.css'

class DashBoardHeader extends Component{

    render(){
        return(
            <div className="ui clearing segment">
                <span className="large ui left floated primary brand-logo-name"> Taantrix </span>
                <Button className="ui right floated primary">Log out<Icon className="right" name="log out"></Icon></Button> 
            </div>               
        )
    }
}

export default DashBoardHeader