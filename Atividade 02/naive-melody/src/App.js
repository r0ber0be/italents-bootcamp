import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { InputName } from './components/inputName/inputName';
import { initialLetters } from './utils/data';
import Button from './components/button/button';

function App() {
  const localLettersValue = localStorage.getItem('letters')
  const localLettersParsed = JSON.parse(localLettersValue)
  
  const [letters, setLetters] = useState(() => localLettersParsed || initialLetters)

  const addNewLetter = () => {
    const newLetter = prompt('Escreva no seu pergaminho. Obs: para adicionar quebra de linhas, dê espaço e coloque a letra maiuscula na próxima palavra!')
    if(!newLetter) {
      return alert('Escreva, por favor!')
    }
    setLetters(prevLetters => {
      const updatedLetters = [...prevLetters, { letter: newLetter }]
      localStorage.setItem('letters', JSON.stringify(updatedLetters))
      return updatedLetters
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button func={addNewLetter} text={"+"} classStyle={"add"} />
        <h1>Olá, mais uma vez, 
          <InputName />
        </h1>
      </header>
      <Card letters={letters}/>
    </div>
  );
}

export default App;
