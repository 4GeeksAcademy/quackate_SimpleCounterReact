//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";
import Buttons from "./component/buttons.jsx";


//This below should be the buttons code
    let counter = 0;
    let newInterval;

    clearInterval(newInterval);
        counter = 0;
            const six = Math.floor(counter/100000);
            const five = Math.floor(counter/10000);
            const four = Math.floor(counter/1000);
            const three = Math.floor(counter/100);
            const two = Math.floor(counter/10);
            const one = Math.floor(counter/1);

            (ReactDOM.render(<Counter digitOne = {one} digitTwo = {two} digitThree = {three} digitFour = {four} digitFive = {five} digitSix = {six} />, document.querySelector('#app')));

    const startClock = () => {
        clearInterval(newInterval);
        newInterval = setInterval(() => {
            const six = Math.floor(counter/100000);
            const five = Math.floor(counter/10000);
            const four = Math.floor(counter/1000);
            const three = Math.floor(counter/100);
            const two = Math.floor(counter/10);
            const one = Math.floor(counter/1);
            counter ++;
        
            (ReactDOM.render(<Counter digitOne = {one} digitTwo = {two} digitThree = {three} digitFour = {four} digitFive = {five} digitSix = {six} />, document.querySelector('#app')));
            
    }, 1000);
    };

    const stopClock = () => {
        clearInterval(newInterval);
    };

    const resetClock = () => {
        clearInterval(newInterval);
        counter = 0;
            const six = Math.floor(counter/100000);
            const five = Math.floor(counter/10000);
            const four = Math.floor(counter/1000);
            const three = Math.floor(counter/100);
            const two = Math.floor(counter/10);
            const one = Math.floor(counter/1);

            (ReactDOM.render(<Counter digitOne = {one} digitTwo = {two} digitThree = {three} digitFour = {four} digitFive = {five} digitSix = {six} />, document.querySelector('#app')));

    }

ReactDOM.render(<Buttons startclock = {startClock} stopclock = {stopClock} resetclock={resetClock}/>, document.querySelector('#buttons'));

