import { Component } from "react";
import PresentCV from "./present-cv";
import Form from "./form";

class Controller extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
    <div>   
        {this.props.edit ? <Form handleSubmit={this.props.handleSubmit}/> : <PresentCV info={this.props.info} handleClick={this.props.handleClick}/>}
    </div>
    );
  }
}
export default Controller;
