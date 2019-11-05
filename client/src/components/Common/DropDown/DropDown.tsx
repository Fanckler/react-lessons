import React, {useState} from 'react';
import style from './dropdown.module.scss';


interface IProps {
    className?: string;
}

export const DropDown: React.FC<IProps> = (props) => {

    return (
        <div className={style.dropdown}>
            <p>lorem</p>
        </div>
    );
}


