import React, {useEffect, useState} from "react"
import "./TvList.css"
import { useParams } from "react-router-dom"
import TvCard from "../TvCard/TvCard"

const TvList = () => {
    
    const [TvList, setTvList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${type ? type : "popular"}?api_key=f3fbd38c0c00cefd4bd7ffeb48aa7a17&language=en-US`)
        .then(res => res.json())
        .then(data => setTvList(data.results))
    }

    return (
        <div className="tv__list">
            <h2 className="tv__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__TvCards">
                {
                    TvList.map(tv => (
                        <TvCard tv={tv} />
                    ))
                }
            </div>
        </div>
    )
}

export default TvList