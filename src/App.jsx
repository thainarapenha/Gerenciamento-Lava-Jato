import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CadastroCliente } from './pages/CadastroCliente/CadastroCliente';
import { Servicos } from './pages/Servicos/Servicos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home setBook={setBook} book={book} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroCliente />} />
          <Route path="/servico" element={<Servicos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;