import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks =['Jasim', 'Deepjol', 'Bapparaz']
  return (
    <div className="App">
      <MovieCounter> </MovieCounter>
      <Nayok name ={nayoks[2]} age= '56'> </Nayok>
      <Nayok name= "Ananta Jalil"> </Nayok>
      <Nayok name ={nayoks[0]}> </Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(5);
  //console.log(count, setCount)
  //const count =5;
  const handeClick = () => console.log('Someone clicked me');
  return (
    <div>
      <button onClick={handeClick}>Add Movie</button>
      <h5>Number of Movies: {count}</h5>
    </div>
  )
}

function Nayok(props){
  console.log(props.name)
  const nayokStyle ={
    border: '2px solid red',
    margin: '20px'
  }
  return(
      <div style={nayokStyle}>
        <h1> Ami Nayok -{props.name}</h1>
        <h3>I have done 10 movies in {props.age ||35} years</h3>
      </div>
        )
  }

export default App;
