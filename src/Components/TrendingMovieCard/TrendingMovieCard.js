import React, { useEffect, useState } from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import './TrendingMovieCard.css'
import {Link} from "react-router-dom";

const TrendingMovieCard = ({trending}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(false)
        }, 1500)
    },[])
    return(

        <>
        {
            isLoading
            ?
            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={400} duration={2}/>
                </SkeletonTheme>
            </div>
            :

            <Link to={`trending/movie/day/${trending.id}`} style={{textDecoration:"none", color:"white"}}>
               <div className="cards">
               <img className="cards__img" src={`https://image.tmdb.org/t/p/original${trending?trending.poster_path:""}`} alt="tv-poster" />
                <div className="cards__overlay">
                    <div className="card__title">{trending?trending.original_title:""}</div>
                    <div className="card__runtime">
                        {trending?trending.release_date:""}
                        <span className="card__rating">{trending?trending.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{trending ? trending.overview: ""}</div>
                </div>
                </div> 
            </Link>

           
        }
        </>
    )
}

export default TrendingMovieCard