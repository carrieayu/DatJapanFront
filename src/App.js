import './App.css';
import Button from './components/Button';
import { FaHeart } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button buttonStyle="btn--danger--outline" buttonSize="btn--large" buttonBorder="btn-circle" iconPlace="btn-iconLeft"><FaHeart/> REGISTRATION</Button>
      </header>
    </div>
  );
}

export default App;
