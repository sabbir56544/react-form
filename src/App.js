import './App.css';
import UseState from './Components/UseState';
import Array from './Components/Array';
import UseStateObject from './Components/UseStateObject'
import BasicForm from './Components/BasicForm';
import UseEffect from './Components/UseEffect';
import HookProject from './Components/HookProject';

function App() {
  return (
    <div className="App">
      <UseState />
      <Array />
      <UseStateObject />
      <div className="form">
      <BasicForm />
      </div>
      <UseEffect />
      <div>
        <HookProject />
      </div>
    </div>
  );
}

export default App;
