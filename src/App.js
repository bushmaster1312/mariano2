import Navbar from './components/navbar/Navbar';
//import Carrousel from './components/carrousel/Carrousel';
//import Cards from './components/cards/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto"
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>

  );
}

export default App;
