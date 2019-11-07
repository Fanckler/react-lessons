import React from 'react';
import {NavLink} from "react-router-dom";
import mainMenu from './main-menu.module.scss';
import dropdown from './dropdown-menu.module.scss';
import cn from "classnames";
import {Icon} from "../Icon/Icon";

interface IItem {
    path: string;
    icon?: string;
    title?: string;
    modifier: string;
}

interface IProps {
    item: IItem;
    isMainMenu: boolean;
}

export const Link:React.FC<IProps> = (props) => {
    const {path, title, icon, modifier } = props.item;
    const { isMainMenu } = props;
    return (
        <NavLink to={path}
                 className={cn(isMainMenu ? mainMenu.link : dropdown.link, isMainMenu ? mainMenu[modifier] : dropdown[modifier] )}
                 activeClassName={mainMenu.active}>
            <Icon name={icon} />
            {title}
        </NavLink>
    );
}


