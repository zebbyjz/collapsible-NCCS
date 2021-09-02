import React, { Component } from 'react';
import "./css/styles.css"
import Collapsible from './collapsible'
import AddIcon from '@material-ui/icons/Add';


class MainPage extends Component {
    state = {  }
    render() { 
        return ( <div className="parent">
            <div className="middleGridDiv">
                {/* <AddIcon fontSize="inherit" className="Testing"></AddIcon><p className="pTesting">henlo</p> */}
                <div className="execHeader"><h1 className="execH1">Executed Modules</h1></div>
                {this.renderCollapsibles()}
                

            </div>
        </div> );
    }


    renderCollapsibles()
    {
      return(<div><Collapsible  title="Information Gathering">
        
          <p>Hostname</p>
          <p>Mac Information</p>
          <p>Port Discovery</p>
          <p>Service Detection</p>
          <p>OS Detection</p>
        
      </Collapsible>
      <Collapsible  title="Exploitation" startTime="5:00AM" endTime="9:00PM">
        
          <p>Open Ports and Services</p>
        
      </Collapsible>
      <Collapsible  title="Vulnerability Validation" ></Collapsible>
      <Collapsible  title="Vulnerability Analysis"></Collapsible>
      <Collapsible  title="Reporting"></Collapsible>
      </div>
      )
    }
}
 
export default MainPage;