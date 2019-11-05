import React from 'react';
import {Link} from "../Link";
import {mainMenu} from "./menu";
import {IMenu} from "./menu";
import style from './navbar.module.scss'
import {ActionButton} from "../ActionButton/ActionButton";


export const NavMenu: React.FC = () => {
    return (
        <div className={style.navbar}>
            <div className={style.mainMenu}>
                {
                    mainMenu.map( (item:IMenu, index) => {
                        return <Link key={index} {...item} />
                    })
                }
            </div>

            <div className={style.buttonGroup}>
                <ActionButton className={`blue`}>Log in</ActionButton>
                <ActionButton className={`orange`}>Join for Free</ActionButton>
            </div>
        </div>
    );
}


