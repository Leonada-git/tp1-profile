import React from "react";

const Menu =()=> {
    return(<nav>
        <ul className="menu">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#news" className="active">Profile</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>)
}

export default Menu;