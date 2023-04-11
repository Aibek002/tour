import React from "react";
import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}><img src="https://cdn.cdnlogo.com/logos/a/42/as-design.svg" alt="" width="80px" height="60px" /></div>
            <div className={s.empty}></div>
            <div className={s.empty}></div>
            <div className={s.empty}></div>
            <div className={s.site1}>Home</div>
            <div className={s.site2}>Tour</div>
            <div className={s.site3}>Price</div>
            <div className={s.site4}>Blog</div>


        </header>
    );
}
export default Header;