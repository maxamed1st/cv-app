import react, { Component } from "react";
import Controller from "./components/display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Store user Information in an object
      infoObj: {},
      edit: true
    }
    this.updateInfoObj = this.updateInfoObj.bind(this);
  }
  //toggle edit to either display the Form or present the CV
  setEdit = () => this.setState({edit: !this.state.edit});
  updateInfoObj = function(key, ...value) {
    //update infoObj with key and value
    let currentInfo = this.state.infoObj;
    currentInfo[key] = value;
    this.setState({
      infoObj: currentInfo
    });
  }
  submitHandlerCallback = function(userInfo) {
    //Extract information from argument and store it in state.infoObj
    this.updateInfoObj('generalInfo', userInfo.name.value, userInfo.email.value, userInfo.phone.value);
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
    this.setEdit();
  }
  render() {
    return (
      <div>
        <Controller edit={this.state.edit} info={this.state.infoObj} handleSubmit={this.handleSubmit.bind(this)} handleClick={this.setEdit.bind(this)}/>
      </div>
    )
  }
}
export default App;
