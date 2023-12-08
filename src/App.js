import logo from './logo.svg';
import './App.css';
import { UseState } from './UseState';
import { ClassState } from './ClassState';



function App() {
  return (
    <div className="App">
     <UseState name="Use state"/>
     <ClassState name="Class state"/>
    </div>
  );
}

export default App;
