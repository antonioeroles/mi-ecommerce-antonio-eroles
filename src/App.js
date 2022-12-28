
import './App.css';
import Navegacion from './components/titulo';
import ItemsListContainer from './components/ItemsListContainer';
import ColorSchemesExample from './components/NavBar';
import CartWidgets from './components/CartWidgets';

function App() {
  return (
    <div className="App">
      <header>
        <ColorSchemesExample/>
      </header>
      <main>
        <Navegacion/>
        <ItemsListContainer props ="Greetings"/>
      </main>
    </div>
  );
}

export default App;
