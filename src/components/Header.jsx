import React from "react";
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo"><img src="https://cdn.cdnlogo.com/logos/a/42/as-design.svg" alt="" width="80px" height="60px" /></div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="site1">Home</div>
            <div className="site2">Tour</div>
            <div className="site3">Price</div>
            <div className="site4">Blog</div>


        </header>
    );
}
export default Header;