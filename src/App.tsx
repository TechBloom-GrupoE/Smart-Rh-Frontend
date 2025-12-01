import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import ListarDepartamento from "./componentes/departamento/listardepartamento/ListarDepartamento"
import FormDepartamento from "./componentes/departamento/formdepartamento/FormDepartamento"
import DeletarDepartamento from "./componentes/departamento/deletardepartamento/DeletarDepartamento"
import ListarColaboradores from "./coaborador/listarcolaboradores/ListarColaboradores"
import FormColaborador from "./coaborador/formcolaborador/FormColaborador"
import DeletarColaborador from "./coaborador/deletarcolaborador/DeletarColaborador"
import Footer from "./componentes/footer/Footer"
import { useState } from "react"
import Navbar from "./componentes/navbar/Navbar"

function App() {

  const [menuState, setMenuState] = useState<'closed' | 'open'>('closed');

  const handleMenuToggle = () => {
    setMenuState(menuState === 'open' ? 'closed' : 'open');
  };

  const handleMenuClose = () => {
    setMenuState('closed');
  };

  return (
    <BrowserRouter>
      <Navbar
        menuState={menuState}
        onMenuToggle={handleMenuToggle}
        onMenuClose={handleMenuClose}
      />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/departamentos" element={<ListarDepartamento />} />
          <Route path="/carddepartamento" element={<FormDepartamento />} />
          <Route path="/editardepartamento/:id" element={<FormDepartamento />} />
          <Route path="/deletardepartamento/:id" element={<DeletarDepartamento />} />
          <Route path="/colaboradores" element={<ListarColaboradores />} />
          <Route path="/colaboradores" element={<FormColaborador />} />
          <Route path="/editarcolaborador/:id" element={<FormColaborador />} />
          <Route path="/deletarcolaborador/:id" element={<DeletarColaborador />} />
        </Routes>
      </div>
      < Footer />
    </BrowserRouter>

  )
}

export default App

