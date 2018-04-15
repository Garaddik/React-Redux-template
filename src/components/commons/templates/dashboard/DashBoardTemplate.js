import React,{Component} from "react"
import DashBoardHeader from './DashBoardHeader'
import DashBoardMenu from './DashBoardMenu'
import DashBoardFooter from "./DashBoardFooter";

class DashBoardTemplate extends Component {
    render() {
      return (
        <div>  
          <DashBoardHeader/>
          <div class="ui grid">
            <div class="three wide column">
              <DashBoardMenu />
            </div>
            <div className="thirteen wide stretched column ">
                <div className="ui segment">
                  {this.props.children}
                </div>
            </div>
          </div>
          <DashBoardFooter/>
        </div>
      );
    }
  }
export default DashBoardTemplate
