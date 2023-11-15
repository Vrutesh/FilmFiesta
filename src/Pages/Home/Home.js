import React, { useEffect, useState } from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Movielist from '../../Components/Movielist/Movielist';
import TvList from '../../Components/TvList/TvList';
import TrendingMovieList from '../../Components/TrendingMovieList/TrendingMovieList';


function Home(){

    const [popularMovies, setPopularMovies]= useState([])

    useEffect(() =>{
        fetch(" https://api.themoviedb.org/3/movie/popular?api_key=f3fbd38c0c00cefd4bd7ffeb48aa7a17&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])



    const [trendingMovie, setTrendingMovie]= useState([])

    useEffect(() =>{
        fetch(" https://api.themoviedb.org/3/trending/movie/day?api_key=f3fbd38c0c00cefd4bd7ffeb48aa7a17&language=en-US")
        .then(res => res.json())
        .then(data => setTrendingMovie(data.results))
    }, [])

    
    return(
        <>
        <div className="poster">
            <Carousel 
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                {
                    popularMovies.map(movie => (
                        <Link to={`/movie/${movie.id}`}>
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt='movie-poster' />
                           
                        </div>
                        <div className="posterImage_overlay">
                            <div className="posterImage_title">{movie ? movie.original_title: ""}</div>
                            <div className="posterImage_runtime">
                                {movie ? movie.release_date:""}
                                <span className="posterImage_rating">
                                    {movie ? movie.vote_average :""}
                                    <i className="fas fa-star" />{""}
                                </span>
                            </div>
                            <div className="posterImage_description">{movie ? movie.overview :""}</div>
                        </div>
                        </Link>
                    ))
                }

{
    trendingMovie.map(trending => (
                        <Link to={`/trending/movie/day${trending.id}`}>
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${trending && trending.backdrop_path}`} alt='Tv-poster'/>
                           
                        </div>
                        <div className="posterImage_overlay">
                            <div className="posterImage_title">{trending ? trending.original_name: ""}</div>
                            <div className="posterImage_runtime">
                                {trending ? trending.first_air_date:""}
                                <span className="posterImage_rating">
                                    {trending ? trending.vote_average :""}
                                    <i className="fas fa-star" />{""}
                                </span>
                            </div>
                            <div className="posterImage_description">{trending ? trending.overview :""}</div>
                        </div>
                        </Link>
                    ))
                }
                
                            
            </Carousel>
            <Movielist/>
            <TvList/>
            <TrendingMovieList/>
        </div>
        </>
    )
}

export default Home