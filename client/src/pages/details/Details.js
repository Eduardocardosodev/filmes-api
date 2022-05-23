import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { APIKey } from '../../config/key'
import { Container } from './Styles'


function Details() {

    const { id } = useParams()
    
    const [movie, setMovie] = useState({})

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
      .then((resp) => resp.json())
      .then((data) => {

        const {title, poster_path, overview, release_date} = data

        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imagePath}${poster_path}`,
          releaseDate: release_date
        }
        setMovie(movie)
      })

    }, [id])

  return (
    <Container>
      <div className='movie'>
        <img src={movie.image} alt={movie.sinopse}/>
        <div className='details'>
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className='release-date'>Release date: {movie.releaseDate}</span>
          <Link to='/'><button>Go Back</button></Link>
        </div>
      </div>
    </Container>
  )
}

export default Details;