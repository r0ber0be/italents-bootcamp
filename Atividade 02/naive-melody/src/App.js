import './App.css';
import { AddButton } from './components/addButton/addButton';
import { Card } from './components/card/card';
import { InputName } from './components/inputName/inputName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddButton />
        <h1>Olá, mais uma vez, 
          <InputName />
        </h1>
      </header>
      <Card />
    </div>
  );
}

export default App;
