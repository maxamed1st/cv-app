import { Component } from "react";
import Form from "./components/form";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Store user Information in an object
      infoObj: {}
    }
    this.updateInfoObj = this.updateInfoObj.bind(this);
  }
  updateInfoObj = function(key, ...value) {
    this.setState({
      infoObj: this.state.infoObj[key] = value
    });
  }
  submitHandlerCallback = function(userInfo) {
    //Extract information from argument and store it in state.infoObj
    this.updateInfoObj('GeneralInfo', userInfo.name.value, userInfo.email.value, userInfo.phone.value);
    this.updateInfoObj(
      'educ',
      userInfo.school.value,
      userInfo.degree.value,
      userInfo.field.value,
      userInfo.graduation.value);
    this.updateInfoObj(
      'work', 
      userInfo.company.value, 
      userInfo.position.value, 
      userInfo.description.value, 
      userInfo.start.value, 
      userInfo.end.value);
      return this.state.infoObj;
  };
  handleSubmit = function(e) {
    //get and store user input
    e.preventDefault();
    const userInfo = document.getElementsByTagName("input");
    this.submitHandlerCallback(userInfo);
    console.log("submitted", this.state.infoObj);
  }
  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}
export default App;
