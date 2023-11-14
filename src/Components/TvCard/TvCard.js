import React, { useEffect, useState } from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import './TvCard.css'
import {Link} from "react-router-dom";

const TvCard = ({tv}) => {
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

            <Link to={`tv/${tv.id}`} style={{textDecoration:"none", color:"white"}}>
               <div className="cards">
               <img className="cards__img" src={`https://image.tmdb.org/t/p/original${tv?tv.poster_path:""}`} alt="tv-poster" />
                <div className="cards__overlay">
                    <div className="card__title">{tv?tv.original_name:""}</div>
                    <div className="card__runtime">
                        {tv?tv.first_air_date:""}
                        <span className="card__rating">{tv?tv.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{tv ? tv.overview: ""}</div>
                </div>
                </div> 
            </Link>

           
        }
        </>
    )
}

export default TvCard