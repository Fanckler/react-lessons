import React, {useState} from 'react';
import {DropDown} from "../DropDown/DropDown";
import cn from "classnames";
import style from './iconmenu.module.scss';


interface IProps {
    className?: string;
}

export const IconMenu: React.FC<IProps> = (props) => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = (event:any) => {
        return isOpen ? setOpen(false) : setOpen(true);
    };

    return (
        <>

            <button className={cn(style['icon-drop-down'], isOpen && style['icon-drop-down--open'])} onClick={toggleMenu}>
                <span></span>
            </button>

            { isOpen && <DropDown /> }
        </>
    );
}


