
import './App.css';
import ColorSchemesExample from './components/NavBar/NavBar';
import Navegacion from './components/pages/titulo/titulo';
import ItemsListContainer from './components/pages/ItemsListContainer/ItemsListContainer';
import ItemsDetailsContainer from './components/pages/ItemsDetailsContainer/ItemsDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <ColorSchemesExample/>
      <Navegacion/>
      <Routes>
        <Route path='/' element= {<ItemsListContainer/>} />
        <Route path='/category/:category' element= {<ItemsListContainer/>} />
        <Route path='item/:id' element= {<ItemsDetailsContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
