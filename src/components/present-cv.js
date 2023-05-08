import { Component } from "react";
import '../styles/present-cv.css';

class PresentCV extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //Get user information from parent component
        const {generalInfo, educ, work} = this.props.info;
        return (
            <main className="container">
                <h2>General Information</h2>
                <div className="grid">
                    <div>
                        <article>
                            Name: {generalInfo[0]}
                        </article> 
                    </div>
                    <div>
                        <article>
                            Email: {generalInfo[1]}
                        </article> 
                    </div>
                    <div>
                        <article>
                            Phone number: {generalInfo[2]}
                        </article> 
                    </div>
                </div>
                <div className="grid">
                    <div>
                        <h2>Education</h2>
                        <article className="resize">
                        Name of School: {educ[0]} <br/>
                        Degree:  {educ[1]} <br/>
                        Field Of Study: {educ[2]} <br/>
                        Graduation Date:  {educ[3]} <br/>
                        </article>
                    </div>
                    <div>
                        <h2>Work Experience</h2>
                        <article className="resize">
                        Company: {work[0]} <br/>
                        Position: {work[1]} <br/>
                        Description: {work[2]} <br/>
                        Start Date: {work[3]} <br/>
                        End Date: {work[4]}
                        </article>
                    </div>
                </div>
                <button onClick={this.props.handleClick}>Edit</button>
            </main>
        )
    }
}
export default PresentCV;
