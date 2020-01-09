import React from "react" 
import '../index.css'
import {Link} from "react-router-dom"

function Header(){
    return(
        <header className="navbar">
            <h3>Stocks and Share</h3>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
        </header>
        
    )
}

export default Header