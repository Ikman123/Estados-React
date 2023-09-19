import './App.css';
import Botonera from './components/indicador';
import Hora from './components/hora';
import Fecha from './components/fecha';

function App() {
  return (
    <>
      <h1>BIENVENIDOS</h1>
      <Botonera 
      />
      <Hora
      imgUrl='https://cdn-icons-png.flaticon.com/128/495/495976.png'
      />
      <Fecha 
      />
    </>
  );
}

export default App;
