import React, { Component } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      startTime:"",
      endTime:""
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.props.startTime ? (this.state.startTime=this.props.startTime):(this.state.startTime="Unknown");
    this.props.endTime ? (this.state.endTime=this.props.endTime):(this.state.endTime="Unknown");
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
        <div className="collapsibleDiv">
        {this.state.open ? (
          <RemoveIcon onClick={(e) => this.togglePanel(e)} fontSize="inherit" className="removeIcon"></RemoveIcon>
        ) : (
          <AddIcon onClick={(e) => this.togglePanel(e)} fontSize="inherit" className="addIcon"></AddIcon>
        )}
        <p onClick={(e) => this.togglePanel(e)} className="collapsible-header">
          {this.props.title}
        </p><p className="startTime">{this.state.startTime}</p><p className="endTime">{this.state.endTime}</p>

        {this.state.open ? (
          <p className="collapsibleDetails">{this.props.children}</p>
        ) : null}
      </div>
    );
  }
}

export default Collapsible;
