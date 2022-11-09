
import React from 'react';

import {useNavigate} from 'react-router-dom';

import './Header.css';

const Header = () => {

    const wander = useNavigate();

    return(
        <div className="headerDesign">
            <div className="linkDesign" onClick={()=>wander("/")}>Home</div>
            <div className="linkDesign" onClick={()=>wander("/login")}>Login</div>
            <div className="linkDesign" onClick={()=>wander("/register")}>Register</div>
        </div>
    )
}

export default Header;