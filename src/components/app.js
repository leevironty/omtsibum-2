import React, {useState} from 'react';
import Landingbuttons from './landingbuttons';
import Editor from './editor';
import Footer from './footer';
import Header from './header';
import Standby from './standby';
import GameView from './gameview';

const App = () => {
    const [view, setView] = useState("landing");

    const clickNewGame = () =>{
        setView("editor");
    };

    let ViewElement = (props) => {
        switch (props.view) {
            case "landing":
                return(<Landingbuttons newGame={clickNewGame}/>);
            case "editor":
                return(<Editor/>);
            case "standby":
                return(<Standby/>);
            case "game":
                return(<GameView/>);
            default:
                new Error();
        }
    };

    const nextView = () => {
        if (view === "landing"){
            setView("editor");
        } else if (view === "editor"){
            setView("standby");
        } else if (view==="standby"){
            setView("game");
        }
    };

    return (
        <>
            <Header/>
            <AppNavigation view={view} changeView={nextView}/>
            <ViewElement view={view} />
            <Footer/>
        </>
    );

};

const AppNavigation = ({view, changeView}) => {
    return (
        <button onClick={changeView}>Next -></button>
    )
};

export default App;