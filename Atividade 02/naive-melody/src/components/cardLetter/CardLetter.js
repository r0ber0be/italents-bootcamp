import { useState } from 'react';
import './CardLetter.css'
import Button from '../button/Button';
import { letterSpliter } from '../../utils/letterSpliter';

export function CardLetter({ letters }) {
  const splitedLetters = letterSpliter(letters)
  const [index, setIndex] = useState(0)

  const next = (e) => {
    e.preventDefault()
    // Enquanto o tamanho do vetor 'letters' for maior que meu indice, é possível incrementar o indice
    if(index < letters.length-1) {
      setIndex(prevIndex => prevIndex+1) // Incrimenta o indice
    }
  }

  const previous = (e) => {
    e.preventDefault()
    // O tamanho de um array com 1 elemento começa em 1 enquanto o index de um array inicia em 0
    if(index > 0) {
      setIndex(prevIndex => prevIndex-1) // Decrementa o indice
    }
  }

  return (
    <div className='card-container'>
      <Button func={previous} text={"<<<"} classStyle={"go-back"} />
      <div>
        {splitedLetters[index].map((l, index) => { //Quando o indice é incrementado ou decrementado, a posição do array letters se altera, fazendo com que uma nova letter seja exibida
          return <p key={index}>{l}</p>
        })}
      </div>
      <Button func={next} text={">>>"} classStyle={"go-back"} />
    </div>
  )
}
       
     