import logo from './logo.svg';
import './App.css';

function App() {
  
  const moveRobot = (direction) =>{
    const backend = "http://localhost:4000/"+direction;
    fetch(backend, {mode: 'no-cors'}).then(response => {
      console.log('Fetch done');
    }).catch(error => {
      console.log('Fetch error:', error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Nemo Robot Controller</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
          <button onClick={() => moveRobot("forward")} style={{width:"120px", height:"60px"}}>GO FORWARD</button>
          <button  onClick={() => moveRobot("backward")} style={{width:"120px", height:"60px"}}>GO BACKWARD</button>
        </div>
      
      </header>
    </div>
  );
}

export default App;
