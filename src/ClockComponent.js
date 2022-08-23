import React, { useEffect, useState, useContext } from 'react'
import { EmojiContext } from "./App";

function ClockComponent() {
    const { mood, setMood } = useContext(EmojiContext)
    // The useState hook allows adding state into a function component. It is basically a function that returns
    // a variable for reading the state and a function for changing that state data.
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    //The useEffect hook lets us running effects in function components. It takes two arguments. 
    //The first one is the callback function containing the effect logic and the second one is an array of dependencies.
    //When we pass an empty array as the second argument to useEffect it runs the callback function only once.

    useEffect(() => {
        //The setInterval utility calls the given callback function at the specified intervals (in milliseconds).
        //The refreshClock changes the current date object with a new one storing the current date and time.
        //The id value returned by setInterval is used as the argument for the clearInterval function.
        const timerId = setInterval(refreshClock);
        //Some effects require clean-ups. 
        //If the effect callback returns a function, that function is used to clean up resources when the component unmounts.
        //  when the component unmounts the timer is stoped using the clearInterval utility.

        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <div>
            <p>Mood: {mood}!</p>
            {date.toLocaleTimeString()}
        </div>
    );
}


export default ClockComponent;