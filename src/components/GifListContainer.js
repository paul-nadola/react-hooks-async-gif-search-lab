import React, { useEffect, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
    const [gifs , setGifs] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

function fetchGif() {
  fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=sD9W96hjaWABDI17I9T9wBx1rAlBFxjF')
    .then(r => r.json())
    .then(data => {
      const gifsArray = data.data.map(gif => ({
        id: gif.id,
        url: gif.images.fixed_height.url,
        title: gif.title
      }));
      setGifs(gifsArray);
    })
}
function handleSearch(searchItem){
    // if (searchItem === searchTerm){
    //     fetchGif(searchTerm)
    gifs.filter(gifs => {
        if (searchItem === searchTerm) {
            return fetchGif(searchItem)
        }
    })
    }

    useEffect(() =>{
        fetchGif()
    }, [])
    console.log(gifs)
  return (
    <div>
        <GifSearch onSearch={handleSearch}/>
        <GifList gifs ={gifs}/>
    </div>
  )
}

export default GifListContainer
