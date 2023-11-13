import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <footer>

        <section>
            <div className="footer-logo">
            <Link to="/"><h1>Film<span>Fiesta</span></h1></Link>
                <h4>© 2023. All rights reserved</h4>
            </div>

            <div className="footer-menu">
                    <ul>
                    <Link to="/movies/popular"><li>Popular</li></Link>
                    <Link to="/movies/upcoming"><li>Now playing</li></Link> 
                    <Link to="/movies/top_rated"><li>Top rated</li></Link>
                    <Link to="/movies/upcoming"><li>Upcoming</li></Link>          
                    </ul>
            </div>

            <div className="footer-social">
                <span><i class="fa-brands fa-x-twitter"></i></span>
                <span><i class="fa-brands fa-instagram"></i></span>
                <span><i class="fa-brands fa-facebook"></i></span>
                <span><i class="fa-brands fa-whatsapp"></i></span>
            </div>

           
        </section>
  {/* <hr /> */}
  <div className="footer-design">
    <h5>Design By Vrutesh Mayekar, Data Provided by TMDB.</h5>
  </div>
        </footer>
        </>
    )
}

export default Footer