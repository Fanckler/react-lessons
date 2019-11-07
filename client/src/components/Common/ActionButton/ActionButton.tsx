import React from 'react';
import style from './button.module.scss';
import cn from "classnames";


interface IProps {
    className?: string;
    responsive?: string;
    onClickHandler?: () => void;
}

export const ActionButton: React.FC<IProps> = (props) => {
    const {className, responsive, children, onClickHandler} = props;

    return (
        <button className={cn(style.button, style[`button--${className}`], responsive && style[responsive] )}
                onClick={onClickHandler}>{children}</button>
    );
}


