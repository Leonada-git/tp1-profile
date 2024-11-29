import React from "react";
import Menu from "../navigation/navigation";
import logo from '../images/logo.png'
const Logo=() => {
    return(<div className="logo">
        <img src={logo} alt="profile" />
    </div>)
}
const Nav_bar=()=>{
    return(<header className="nav-bar">
        <Menu/>
        <Logo/>
    </header>)
}

export default Nav_bar;