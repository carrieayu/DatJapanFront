import Button from './Components/Button';
import Label from './Components/Label';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Label sizeFont="lbl-fontExLarge" fontWeight="lbl-bold">FontStyle</Label>
        <Button buttonStyle="btn--danger--solid" buttonSize="btn--large" > Login </Button>
      </header>
    </div>
  );
}

export default App;
