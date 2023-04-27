

function GifList({gifs}) {
  console.log(gifs)
  return (
    <div>
      {gifs.map(gif => {
        return(
          <ul key={gif.id}>
            <li><img src={gif.url} alt={gif.title} /></li>
          </ul>
        )
      })}
    </div>
  )
}

export default GifList
