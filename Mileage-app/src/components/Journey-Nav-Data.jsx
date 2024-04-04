import "./Journey-Nav.css";


import PropTypes from 'prop-types';

function JourneyNavData(props) {
    return (
        <div className="j-card">
            <div className="j-image">
                <img alt="image" src={props.image} />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

JourneyNavData.propTypes = {
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default JourneyNavData;