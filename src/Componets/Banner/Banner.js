import React, {useEffect, useState} from 'react'
import "./Banner.css"
import {apiKey, imageUrl} from '../../Constants/constants'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
       axios.get(`trending/all/day?api_key=${apiKey}&language=en-US`).then((response)=>{
              console.log(response.data.results[0])
              setMovie(response.data.results[0])
       })
    }, [])
    return (
        <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path: ''})`}} 
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title:'' }</h1>
                <div className='buttons'> 
                    <button className='btn'>Play</button>
                    <button className='btn'>MyList</button>
                </div>
                <h1 className='description'>
                {movie ? movie.overview:''}
                </h1>
            </div>
            
        </div>
    )
}

export default Banner
