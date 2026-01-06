import logo from './logo.svg';
import './App.css';
import Component from './Component';
import Listas from './Listas';
import Componente2 from './Componente2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          <b>
            REACT
          </b>
        </p>
      </header>
      <div className='componentes'>
        <Component/>
        <Listas/>
        <Componente2/>
      </div>
    </div>
  );
}

export default App;
