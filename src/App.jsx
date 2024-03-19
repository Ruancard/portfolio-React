import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// importing hooks
// import { useAuth } from './hooks/useAuth';


// importing pages
import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import Projetos from './pages/projetos/projetos';
import Contatos from './pages/contatos/contatos';
import Habilidades from './pages/habilidades/habilidades';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <div className='container'>
        <Routes>
          < Route path='/' element={< Home />} />
          < Route path='/sobre' element={< Sobre />} />
          < Route path='/projetos' element={< Projetos />} />
          < Route path='/habilidades' element={< Habilidades />} />   
          < Route path='/contatos' element={< Contatos />} />               
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
