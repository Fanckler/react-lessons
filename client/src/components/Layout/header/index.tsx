import React from 'react';
import style from './style.module.scss'
import {Logo} from "../../Common/Logo";
import {NavMenu} from "../../Common/NavMenu";


export const Header: React.FC = () => {
    return (
        <section className={style.header}>
            <div className="container">
                <div className={style.headerRow}>
                    <Logo />
                    <NavMenu />
                </div>
            </div>
        </section>
    );
}

