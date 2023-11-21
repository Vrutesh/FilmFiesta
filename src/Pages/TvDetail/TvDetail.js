import React, {useEffect, useState} from "react"
import "./TvDetail.css"
import { useParams } from "react-router-dom"

const TvDetail = () => {
    const [currentTvDetail, setTv] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=f3fbd38c0c00cefd4bd7ffeb48aa7a17&language=en-US`)
        .then(res => res.json())
        .then(data => setTv(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentTvDetail ? currentTvDetail.backdrop_path : ""}`} alt="movie-backdrop-path" />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentTvDetail ? currentTvDetail.poster_path : ""}`} alt="movie-poster"/>
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentTvDetail ? currentTvDetail.original_name : ""}</div>
                        <div className="movie__tagline">{currentTvDetail ? currentTvDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentTvDetail ? currentTvDetail.vote_average: ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentTvDetail ? "(" + currentTvDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        {/* <div className="movie__runtime">{currentTvDetail ? currentTvDetail.runtime + " mins" : ""}</div> */}
                        <div className="movie__releaseDate">{currentTvDetail ? "Release date: " + currentTvDetail.first_air_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentTvDetail && currentTvDetail.genres
                                ? 
                                currentTvDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentTvDetail ? currentTvDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentTvDetail && currentTvDetail.homepage && <a href={currentTvDetail.homepage} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentTvDetail && currentTvDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentTvDetail.imdb_id} target="_blank"  rel="noreferrer" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
          
        </div>
    )
}

export default TvDetail