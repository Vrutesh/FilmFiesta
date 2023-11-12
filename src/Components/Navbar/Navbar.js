import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <header>
            <nav>
                <div className="nav-logo">
                    <Link to="/"><h1>FilmFiesta</h1></Link>
                </div>
                <div className="nav-menu">
                    <ul>
                    <Link to="/movies/popular"><li>Popular</li></Link>
                    <Link to="/movies/top_rated"><li>Top Rated</li></Link>
                    <Link to="/movies/upcoming"><li>Upcoming</li></Link>          
                    </ul>
                </div>
                <div className="nav-search">
                <div className="searchbar">
                    <input type="search" placeholder="Search Movie" />
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar
 