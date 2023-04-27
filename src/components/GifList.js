// import React from 'react'

// function GifList({gifs}) {
// console.log(gifs)
//   return (
//     <div>
//         {Object.keys(gifs).map(gif => {
//             return(<>
//                 <li key={gif.id} ><img src={gif.url} alt={gif.title} key={gif.id}/></li>
//             </>)
//         })}
//     </div>
//   )
// }

// export default GifList
// import React from 'react'

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
