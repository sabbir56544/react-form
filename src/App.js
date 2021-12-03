import './App.css';
import UseState from './Components/UseState';
import Array from './Components/Array';
import UseStateObject from './Components/UseStateObject'
import BasicForm from './Components/BasicForm'

function App() {
  return (
    <div className="App">
      <UseState />
      <Array />
      <UseStateObject />
      <div className="form">
      <BasicForm />
      </div>
    </div>
  );
}

export default App;
