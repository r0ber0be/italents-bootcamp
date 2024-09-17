import Button from "../button/Button";
import { WelcomeMessage } from "../welcome/WelcomeMessage";

export default function PageHeader({ setLetters }) {
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
    <header className="App-header">
      <Button func={addNewLetter} text={"+"} classStyle={"add"} />
      <WelcomeMessage />
    </header>
  )
}