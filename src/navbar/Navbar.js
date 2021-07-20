import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import "./Navbar.css"

export class Navbar extends Component {
    render() {
        return (
            <section className="font-extrabold font-serif ">
            <nav>
            <ul className="liste">
             <Link to="/">  
            <li className="items">Accueil</li>
            </Link>
            <Link to="/Profil"> 
            <li className="items">Profil</li>
            </Link> 
            </ul>
             
       </nav>
       </section>
        )
    }
}

export default Navbar
