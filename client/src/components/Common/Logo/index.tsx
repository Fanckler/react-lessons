import React from 'react';
import {NavLink} from "react-router-dom";
import style from './logo.module.scss';


export const Logo: React.FC = () => {
    return (
        <NavLink to="/" style={{ padding: '10px 0' }}>
            <img src="https://j4l.com/templates/dream_modern/images/1708/j4l_logo_helloween.png" className={style.logo} alt="logo"/>
        </NavLink>
    );
}


