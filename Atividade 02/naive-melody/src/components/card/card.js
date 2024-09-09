import { useState } from 'react';
import './card.css'
import Button from '../button/button';
import { letterSpliter } from '../../utils/letterSpliter';

export function Card({ letters }) {
  const splitedLetters = letterSpliter(letters)
  const [index, setIndex] = useState(0)
  let lines = splitedLetters[index]

  const next = (e) => {
    e.preventDefault()
    if(index < letters.length-1) {
      setIndex(prevIndex => prevIndex+1)
    }
  }

  const previous = (e) => {
    e.preventDefault()
    if(index > 0) {
      setIndex(prevIndex => prevIndex-1)
    }
  }

  return (
    <div className='card-container'>
      <Button func={previous} text={"<<<"}/>
      <div>
        {lines.map((l, index) => {
          return <p key={index}>{l}</p>
        })}
      </div>
      <Button func={next} text={">>>"}/>
    </div>
  )
}
       
     