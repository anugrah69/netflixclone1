import React, { useEffect , useState} from 'react'
import instance from '../instance';
import './Row.css'

function Row({title,fetchurl}) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [allMovies,setAllMovies]=useState([]);

  const fetchData = async () => {
    const response = await instance.get(fetchurl)
    
    const {data}=response;
    setAllMovies(data.results)
  }
  useEffect(() => {
    fetchData();
  },[])

  console.log(allMovies);
  return (
    <div className='row'>
      <h1 className='title' >{title}</h1>
      <div className='movierow'>
        {
          allMovies?.map(item => (
          <img src={`${base_url}${item.poster_path}`} alt="" className='movie' />
        ))
        }
        
      </div>
    </div>
  )
}

export default Row