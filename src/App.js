import React, {Component} from 'react'
import Schools from './connectors/SchoolConnector';
import DashBoardTemplate from './components/commons/templates/dashboard/DashBoardTemplate'
import {Switch,Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Dump from './components/Dump'

export default class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        <Switch>
          <DashBoardTemplate path="/dashboard">
            <Switch>
                <Route exact path='/dashboard' component={Schools} />
                <Route  path='/dashboard/home' component={Dump} />
                <Route  path='/dashboard/aboutus' component={Dump} />
                <Route  path='/dashboard/privacy' component={Dump} />
                <Route  path='/dashboard/contactus' component={Dump} />
            </Switch>
          </DashBoardTemplate>
          </Switch>
        </BrowserRouter>
    </div>
    )
  }
}