import { Component } from "react";
import './Button.css'

class Button extends Component {
  render() {
    return (
      <div className="buttons" >
        <button value={this.props.location} onClick={this.props.handleClick} className="location-button" >{this.props.location ? this.props.location : "All Locations"}</button>
      </div>
    );
  }
}

export default Button;
