import { Component } from "react";
import "./Guide.css";

class GuideData extends Component {
    render() {
        return (
            <div>
                <div className={this.props.className}></div>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img
                        alt="img"
                        src={this.props.img1}
                    />

                </div>
            </div>
        );
    }

}

export default GuideData;