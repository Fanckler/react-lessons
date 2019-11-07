import React from 'react';
import {Link} from "../Link";
import {mainMenu} from "../MenuList/menu";
import {IMenu} from "../MenuList/menu";
import style from './navbar.module.scss'
import {ActionButton} from "../ActionButton/ActionButton";
import {IconMenu} from "../IconMenu";
import {OpenLoginPopup} from "../../../Helpers/openPopupHandler";


export const NavMenu: React.FC = () => {
    return (
        <div className={style.navbar}>
            <div className={style.mainMenu}>
                {
                    mainMenu.map( (item:IMenu, index:number) => {
                        return index <= 4 &&  <Link key={index} {...{item, isMainMenu: true}} />
                    })
                }
            </div>

            <div className={style.buttonGroup}>
                <OpenLoginPopup>
                    <ActionButton className={`blue`} onClickHandler={() => {console.log(1)} }>Log in</ActionButton>
                </OpenLoginPopup>
                <ActionButton className={`orange`} responsive={'hidden-sm'} onClickHandler={()=> {console.log(2)} }>Join for Free</ActionButton>
                <IconMenu />
            </div>
        </div>
    );
}


