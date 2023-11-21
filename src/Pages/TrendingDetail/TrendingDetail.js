import React, { useEffect, useState } from "react";
import "./TrendingDetail.css"
import { useParams } from "react-router-dom";

const TrendingDetail = () => {
    const [currentTrending, setTrending] = useState()
    const {id} = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=f3fbd38c0c00cefd4bd7ffeb48aa7a17&language=en-US`)
        .then(res => res.json())
        .then(data => setTrending(data))
    }

    return(
        <div className="movie">
        <div className="movie__intro">
        <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentTrending?.backdrop_path || ""}`} alt="movie-backdrop-path" />
        </div>
        <div className="movie__detail">
            <div className="movie__detailLeft">
                <div className="movie__posterBox">
                    <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentTrending ? currentTrending.poster_path : ""}`} alt="movie-poster"/>
                </div>
            </div>
            <div className="movie__detailRight">
                <div className="movie__detailRightTop">
                    <div className="movie__name">{currentTrending ? currentTrending.original_title : ""}</div>
                    <div className="movie__tagline">{currentTrending ? currentTrending.tagline : ""}</div>
                    <div className="movie__rating">
                        {currentTrending ? currentTrending.vote_average: ""} <i className="fas fa-star" />
                        <span className="movie__voteCount">{currentTrending ? "(" + currentTrending.vote_count + ") votes" : ""}</span>
                    </div>  
                    <div className="movie__runtime">{currentTrending ? currentTrending.runtime + " mins" : ""}</div>
                    <div className="movie__releaseDate">{currentTrending ? "Release date: " + currentTrending.release_date : ""}</div>
                    <div className="movie__genres">
                        {
                            currentTrending && currentTrending.genres
                            ? 
                            currentTrending.genres.map(genre => (
                                <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                            )) 
                            : 
                            ""
                        }
                    </div>
                </div>
                <div className="movie__detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <div>{currentTrending ? currentTrending.overview : ""}</div>
                </div>
                
            </div>
        </div>
        <div className="movie__links">
            <div className="movie__heading">Useful Links</div>
            {
                currentTrending && currentTrending.homepage && <a href={currentTrending.homepage} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
            }
            {
                currentTrending && currentTrending.imdb_id && <a href={"https://www.imdb.com/title/" + currentTrending.imdb_id} target="_blank"  rel="noreferrer" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
            }
        </div>
      
    </div>
    )
}

export default TrendingDetail