import './App.css';
import Button from './components/Button';

function App(props) {
  return (
    <div className="App">
      <Button increment={props.increment}/>
    </div>
  );
}

export default App;
