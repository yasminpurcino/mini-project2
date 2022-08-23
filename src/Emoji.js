import React, { useContext, useState } from 'react'
import { EmojiContext } from "./App";


function Emoji() {

    const { mood, setMood } = useContext(EmojiContext)



    return (
        <div><p>Mood: {mood}!</p>
            <button onClick={() => setMood(mood === "😃" ? "🥰" : "😃")} >
                Click me
            </button></div>
    );

}



export default Emoji;