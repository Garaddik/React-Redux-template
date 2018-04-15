import React,{Component} from 'react'
import {Menu} from 'semantic-ui-react'
import './DashBoardFooter.css'
import {NavLink} from 'react-router-dom'

class DashBoardFooter extends Component{

    render(){
        return(
            
            <Menu fixed="bottom" className="ui clearing" pointing>
                    <Menu.Item as={NavLink} className="ui left floated" to="/dashboard" content="Dash Board" />
                    <Menu.Item as={NavLink} to="/dashboard/aboutus" content="About" />
                    <Menu.Item as={NavLink} to="/dashboard/home" content="Home" />
                    <Menu.Item as={NavLink} to="/dashboard/privacy" content="Privacy" />
                    <Menu.Item as={NavLink} className="ui right floated" to="/dashboard/contactus" content="Contact Us" />
            </Menu>
        )
    }
}

export default DashBoardFooter