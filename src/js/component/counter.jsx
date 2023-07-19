import React from "react";
import PropTypes from 'prop-types';

const Counter = (props) => {
	return (
		<div className="bigWrapper text-center">
            <h1>This is a seconds counter. You can play with it! &#127774;</h1>
            <div className="wrapper">
                <div className="Icon">
                <i className="far fa-clock"></i>
                </div>
                <div className="six">{props.digitSix % 10}</div>
                <div className="five">{props.digitFive % 10}</div>
                <div className="four">{props.digitFour % 10}</div>
                <div className="three">{props.digitThree % 10}</div>
                <div className="two">{props.digitTwo % 10}</div>
                <div className="one">{props.digitOne % 10}</div>
            </div>
        </div>
	);
};

Counter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

export default Counter;