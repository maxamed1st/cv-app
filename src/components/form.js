import { Component } from "react";
import '../styles/form.css';

class Form extends Component {
    //Render form to get User information
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <form onSubmit={this.props.handleSubmit} className="container">
            <fieldset>
                <legend>General Information</legend>
                <label htmlFor="name"> Name </label>
                <input id="name" type="text"></input>
                <label htmlFor="email"> email </label>
                <input id="email" type="email"></input>
                <label htmlFor="phone"> phone </label>
                <input id="phone" type="tel"></input>
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                <label htmlFor="school"> School name </label>
                <input id="school" type="text"></input>
                <label htmlFor="degree"> Degree </label>
                <input id="degree" type="text"></input>
                <label htmlFor="field"> Field of study </label>
                <input id="field" type="text"></input>
                <label htmlFor="graduation"> Graduation date </label>
                <input id="graduation" type="date"></input>
            </fieldset>
            <fieldset>
                <legend>Work Experience</legend>
                <label htmlFor="company"> Company name </label>
                <input id="company" type="text"></input>
                <label htmlFor="position"> Job title </label>
                <input id="position" type="text"></input>
                <label htmlFor="description"> Job description </label>
                <input id="description" type="text"></input>
                <label htmlFor="start"> Start date </label>
                <input id="start" type="date"></input>
                <label htmlFor="end"> End date </label>
                <input id="end" type="date"></input>
            </fieldset>
            <input type="submit" value="Save"/>
        </form>
    )
  }
}
export default Form;
