import React,{Component} from 'react'
import {Menu} from 'semantic-ui-react'

class DashBaordMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
                activeItem:"Students"
        }
        this.menuSelecting = this.menuSelecting.bind(this)
    }

    menuSelecting = (e,{name}) => {
        this.setState({activeItem:name})
    }
    render(){
        const {activeItem} = this.state
        return(
                <Menu className="ui vertical fluid tabular primary">
                            <Menu.Item name="Students" active= {activeItem === 'Students'} onClick={this.menuSelecting}/> 
                            <Menu.Item name="Staffs" active= {activeItem === 'Staffs'} onClick={this.menuSelecting}/> 
                            <Menu.Item name="Standards" active= {activeItem === 'Standards'} onClick={this.menuSelecting}/> 
                            <Menu.Item name="Subjects" active= {activeItem === 'Subjects'} onClick={this.menuSelecting}/> 
                            <Menu.Item name="Attandance" active= {activeItem === 'Attandance'} onClick={this.menuSelecting}/> 
                            <Menu.Item name="Marks" active= {activeItem === 'Marks'} onClick={this.menuSelecting}/> 
                </Menu>
        )
    }
}

export default DashBaordMenu