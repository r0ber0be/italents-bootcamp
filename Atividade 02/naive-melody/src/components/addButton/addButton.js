import { letters } from '../../utils/data'
import './addButton.css'

export function AddButton() {
  const addNewLetter = () => {
    const newLetter = prompt('Escreva no seu pergaminho. Obs: para adicionar quebra de linhas, dê espaço e coloque a letra maiuscula na próxima palavra!')
    if(!newLetter) {
      return alert('Escreva, por favor!')
    }
    letters.push({letter: newLetter})
  }

  return (
    <button 
      type='button'
      className='add'
      onClick={addNewLetter}
    >
      +
    </button>
  )
}