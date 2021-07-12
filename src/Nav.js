import React from 'react'
import {Link} from "react-router-dom";
import logo from "./img/icon/baker.png"; 

export default function Nav() {
    const navStyle ={
        textDecoration: 'none',
        fontSize:'20px',
        marginRight:'15px',
        color:'gray'
    };

    return (
        <nav>
            <div className="navContainer">
                <Link  style={navStyle} to="/">
                    <div className="logo">
                        <img className="logo-icon" src={logo} alt="logo"/>    
                        <span>EZcook</span>
                    </div>
                </Link>
                <ul className="nav-link">
                    <Link  style={navStyle} to="/BuildPost" >
                        <li>發布食譜</li>
                    </Link>
                    <Link style={navStyle} to="/BuyList">
                        <li>購物清單</li>
                    </Link>
                    <Link style={navStyle} to="/Member">
                        <li>會員</li>
                    </Link>
                    <Link style={navStyle} to="/ViewPost">
                        <li>瀏覽食譜</li>
                    </Link>
                    <Link style={navStyle} to="/Login">
                        <li>登入/註冊</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
