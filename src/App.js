import Navbar from './componentes/Navbar';
import Titulo from './componentes/Titulo';

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
      </header>
    </div>
  );
}

export default App;
