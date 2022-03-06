import Navbar from './componentes/Navbar';
import Titulo from './componentes/Titulo';
import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
      <header>
        <div> 
          <Navbar/>
        </div>
        <div>
          <Titulo titulo = 'ESTE ES EL TITULO'/>
        </div>
        <div>
          <Contador/>
        </div>
      </header>
    </div>
  );
}

export default App;
