import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import TrendingMovieCard from "../TrendingMovieCard/TrendingMovieCard"


const TrendingMovieList = () => {
    
    const [TrendingMovie, setTrendingMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`
        https://api.themoviedb.org/3/trending/movie/day?api_key=f3fbd38c0c00cefd4bd7ffeb48aa7a17&language=en-US`)
        .then(res => res.json())
        .then(data => setTrendingMovieList(data.results))
    }

    return (
        <>
          <div className="movie__list">
            <h2 className="list__title">{(type ? type : "TRENDING MOVIES").toUpperCase()}</h2>
            <div className="list__cards">
              {
                    TrendingMovie.map(trending => (
                <TrendingMovieCard trending={trending} />
              ))
                }
            </div>
          </div>
      

    </>
  )
}

export default TrendingMovieList