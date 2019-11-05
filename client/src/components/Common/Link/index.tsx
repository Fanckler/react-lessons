import React from 'react';
import {NavLink} from "react-router-dom";
import style from './link.module.scss';

interface IProps {
    path: string;
    icon?: string;
    title?: string;
}

export const Link:React.FC<IProps> = (props) => {
    return (
        <NavLink to={props.path} className={style.itemLink}>{props.title}</NavLink>
    );
}


