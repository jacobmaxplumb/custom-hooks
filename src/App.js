import logo from './logo.svg';
import './App.css';
import { Todos } from './components/Todos';
import { People } from './components/People';

function App() {
  return (
    <div>
      <Todos />
      <br />
      <br />
      <People />
    </div>
  );
}

export default App;
