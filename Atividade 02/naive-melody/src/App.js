import { useState } from 'react';
import './App.css';
import { AddButton } from './components/addButton/addButton';
import { Card } from './components/card/card';
import { InputName } from './components/inputName/inputName';
import { initialLetters } from './utils/data';

function App() {
  const [letters, setLetters] = useState(initialLetters)

  const addNewLetter = () => {
    const newLetter = prompt('Escreva no seu pergaminho. Obs: para adicionar quebra de linhas, dê espaço e coloque a letra maiuscula na próxima palavra!')
    if(!newLetter) {
      return alert('Escreva, por favor!')
    }
    setLetters([...letters, { letter: newLetter }])
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddButton addNewLetter={addNewLetter} />
        <h1>Olá, mais uma vez, 
          <InputName />
        </h1>
      </header>
      <Card letters={letters}/>
    </div>
  );
}

export default App;
