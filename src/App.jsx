import { useState } from 'react'

const dictionary = [
  {word: "React", meaning: "A JavaScript library for building user interfaces"},
  {word: "Component", meaning: "A reusable building block in react."},
  {word: "State", meaning: "An object that stores data for a component"}
]


const XDictinary = () => {
  const [text, setText] = useState("")
  const [definition, setDefinition] = useState()


const handleChange = e => setText(e.target.value);



  return (
    <>
        <div>
          <h1>Dictionary</h1>
          <input onChange={handleChange} type="text" placeholder='search for a word...'  />
          <button onClick={handleClick}>Search</button>
          <h4>Definition</h4>
          <p>{definition}</p>
        </div>
    </>
  )
}



export default XDictinary
