import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

class Header extends React.Component {
    render(){
        return(
            <header className="Header">
                <h1> <Link to="/" className="Header_title">Radiohead</Link> </h1>
                <ul className="Header_menu">
                    <li><Link to="/list" className="link">List</Link></li>
                    <li><Link to="/registre" className="link">Registre</Link></li>
                    <li>Contact</li>
                </ul>
            </header>
        )
    }
}

export default Header