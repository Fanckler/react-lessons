import React, {useState} from 'react';
import style from './dropdown.module.scss';
import {IMenu, mainMenu} from "../MenuList/menu";
import {Link} from "../Link";
import {ActionButton} from "../ActionButton/ActionButton";
import {OpenLoginPopup} from "../../../Helpers/openPopupHandler";


interface IProps {
    className?: string;
}

export const DropDown: React.FC<IProps> = (props) => {

    return (
        <div className={style.dropdown}>
            <OpenLoginPopup>
                <ActionButton className={`orange`} responsive={'show-sm'}>Join for Free</ActionButton>
            </OpenLoginPopup>
            {
                mainMenu.map( (item:IMenu, index:number) => {
                    return <Link key={index} {...{item, isMainMenu: false}} />
                })
            }
        </div>
    );
}


