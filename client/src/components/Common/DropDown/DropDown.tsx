import React, {useState} from 'react';
import style from './dropdown.module.scss';
import {IMenu, mainMenu} from "../MenuList/menu";
import {Link} from "../Link";
import {ActionButton} from "../ActionButton/ActionButton";


interface IProps {
    className?: string;
}

export const DropDown: React.FC<IProps> = (props) => {

    return (
        <div className={style.dropdown}>
            <ActionButton className={`orange`} responsive={'show-sm'}>Join for Free</ActionButton>
            {
                mainMenu.map( (item:IMenu, index:number) => {
                    return <Link key={index} {...{item, isMainMenu: false}} />
                })
            }
        </div>
    );
}


