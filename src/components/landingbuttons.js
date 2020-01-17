import React from 'react';
import {Link} from 'react-router-dom';
import './landingbuttons.css';


const Landingbuttons = (props) => {
    return (
        <div>
            <Link to='/play'><button className="btn-join" onClick={props.joinGame}>JOIN GAME</button></Link>
            <button className="btn-new" onClick={props.newGame}>or create a new game</button>
        </div>
    )
};

export default Landingbuttons;