import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-logo">
            <Link to="/">
              <h1>Film<span>Fiesta</span></h1>
            </Link>
          </div>
         
          <div className="nav-menu">
            <h4 className="home-tab"><Link to="/">HOME</Link></h4>
            <h4 className="trending-tab"><Link to="/trending/movie/day">TRENDING MOVIES</Link></h4>
            <ul>
              <li>
                <Link to="/">MOVIES</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/movies/popular">POPULAR</Link></li>
                  <li><Link to="/movies/now_playing">NOW PLAYING</Link></li>
                  <li><Link to="/movies/top_rated">TOP RATED</Link></li>
                  <li><Link to="/movies/upcoming">UPCOMING</Link></li>
                </ul>
              </li>
              
              <li>
                <Link to="/">TV SERIES</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/tv/popular">TV POPULAR</Link></li>
                  <li><Link to="/tv/airing_today">AIRING TODAY</Link></li>
                  <li><Link to="/tv/on_the_air">ON THE AIR</Link></li>
                  <li><Link to="/tv/top_rated">TOP RATED</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <div className="nav-search">
            <div className="searchbar">
                <input type="search" placeholder="Search Movie" />
              <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div> */}

          <div className="nav-userprofile">
            <span></span>
          </div>

        </nav>
      </header>
    </>
  );
}

export default Navbar;
