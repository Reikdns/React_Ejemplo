import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import { useState } from 'react';
import Container from './components/container/container';

function App() {

  const [option, setOption] = useState(0)

  return (
    <div className="App">
      <Nav option={option} setOption={setOption} />
      <div id='main'>
        <Container option={option}/>
      </div>
    </div>
  );
}

export default App;
