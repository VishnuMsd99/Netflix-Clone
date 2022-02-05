import React, {useEffect,useState} from 'react'
import './Row.css'
import {apiKey, imageUrl } from '../../Constants/constants'
import Youtube from 'react-youtube'
import axios from '../../axios'
function Row(props) {
    const [movie, setMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('') 
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data.results)
            setMovie(response.data.results)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handlemovie=(id)=>{
          console.log(id)
            axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(response=>{

                if(response.data.results[0]){
                    setTrailerUrl(response.data.results[0])
                }
      })
        }


    return (
        <div className='row'> 

            <h2>{props.title}</h2>

            <div className='posters'>
                {movie.map((obj)=>
                    <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='poster'/>

                )}
                
               
            </div>

            {trailerUrl && < Youtube videoId={trailerUrl.key}opts={opts} />}
            
        </div>
    )
}

export default Row
