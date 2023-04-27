import React, {useState} from 'react'

function GifSearch({onSearch}) {
const [text, setText] = useState('')
function handleChange (e){
    setText(e.target.value)
}
function handleSubmit (e){
    e.preventDefault()
    onSearch()
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search for gif' 
            onChange={handleChange}
            value={text}/>
            <button type ="submit">Search</button>
        </form>
    </div>
  )
}

export default GifSearch