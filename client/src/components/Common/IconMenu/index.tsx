import React, {useState, useRef} from 'react';
import {DropDown} from "../DropDown/DropDown";
import cn from "classnames";
import style from './iconmenu.module.scss';
import {useOutsideClick} from "../../Helpers/useOutsideClick";


interface IProps {
    className?: string;
}

export const IconMenu: React.FC<IProps> = (props) => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    const toggleMenu = (event:any) => {
        setOpen(!isOpen);
    };
    useOutsideClick(ref, () => { setOpen(false) });
    return (
        <div ref={ref}>
            <button className={cn(style['icon-drop-down'], isOpen && style['icon-drop-down--open'])}
                    onClick={toggleMenu}>
                <span></span>
            </button>

            { isOpen && <DropDown /> }
        </div>
    );
};

