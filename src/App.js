import './App.css';
import Button from './components/Button';
import { FaHeart } from "react-icons/fa";
import Label from './components/Label/Label';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Label sizeFont="lbl-fontExLarge" labelSize="lbl-small" iconPlace="lbl-iconLeft" fontWeight="lbl-regular" fontStyle="lbl-sans-serif" textAlign="lbl-center"> <FaHeart/>fontstyle</Label>
        <Button buttonStyle="btn--primary--outline" buttonSize="btn--large" buttonBorder="btn-circle" iconPlace="btn-iconLeft"><FaHeart/> CLICK</Button>
      </header>
    </div>
  );
}

export default App;
