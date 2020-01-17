import React, {Component, useState, useEffect, useReducer} from 'react';
import Footer from './footer';
import Header from './header';

function Play(){
    return (
        <>
            <Header />

            <Footer />
        </>
    );
}

function GamePickerView(props){
    const [input, setInput] = useState("");

    const setGameID = (e) =>{
        e.preventDefault();
    };

    return (
        <form onSubmit={setGameID}>
            <input type="text" value={input}/>
        </form>
    )
}

export default Play;