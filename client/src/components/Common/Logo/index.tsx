import React from 'react';
import {NavLink} from "react-router-dom";

export const Logo: React.FC = () => {
    return (
        <NavLink to="/">
            <img src="https://j4l.com/templates/dream_modern/images/1708/j4l_logo_helloween.png" alt="logo"/>
        </NavLink>
    );
}


