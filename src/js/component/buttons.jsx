import React from "react";
import PropTypes from 'prop-types';

const Buttons = (props) => {
	return (
		<div className="buttonWrapper text-center">
            <button onClick={() => {props.startclock()}} type="button" className="startButton bg-success">START</button>
            <button onClick={() => {props.stopclock()}} type="button" className="pauseButton bg-warning">PAUSE</button>
            <button onClick={() => {props.resetclock()}} type="button" className="stopButton bg-danger">RESET</button>
        </div>
	);
};

Buttons.propTypes = {
    stopclock: PropTypes.func,
    startclock: PropTypes.func,
    resetclock: PropTypes.func
};

export default Buttons;