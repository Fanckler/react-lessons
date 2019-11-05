import React from 'react';
import style from './button.module.scss';
import cn from "classnames";


interface IProps {
    className?: string;
}

export const ActionButton: React.FC<IProps> = (props) => {
    const {className, children} = props;

    return (
        <button className={cn(style.button, style[`button--${className}`] )}>{children}</button>
    );
}


