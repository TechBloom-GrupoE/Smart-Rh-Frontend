import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Home from "./pages/home/Home"
import ListarDepartamento from "./componentes/departamento/listardepartamento/ListarDepartamento"
import FormDepartamento from "./componentes/departamento/formdepartamento/FormDepartamento"
import DeletarDepartamento from "./componentes/departamento/deletardepartamento/DeletarDepartamento"
import Navbar from "./componentes/navbar/Navbar"
import ListarColaboradores from "./coaborador/listarcolaboradores/ListarColaboradores"
import FormColaborador from "./coaborador/formcolaborador/FormColaborador"
import DeletarColaborador from "./coaborador/deletarcolaborador/DeletarColaborador"

function App() {
	return (
		<>
		<BrowserRouter>
        <Navbar menuState={"closed"} onMenuToggle={function (): void {
          throw new Error("Function not implemented.")
        }} onMenuClose={function (): void {
          throw new Error("Function not implemented.")
        }} />
                <div>
                <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/departamentos" element={<ListarDepartamento />}/>
				<Route path="/caddepartamento" element={<FormDepartamento />} />
              	<Route path="/editardepartamento/:id" element={<FormDepartamento />} />
              	<Route path="/deletardepartamento/:id" element={<DeletarDepartamento />} />
				<Route path="/colaboradores" element={<ListarColaboradores />}/>
				<Route path="/colaboradores" element={<FormColaborador />}/>
				<Route path="/editarcolaborador/:id" element={<FormColaborador />}/>
                <Route path="/deletarcolaborador/:id" element={<DeletarColaborador/>}/>
                </Routes>
                </div>
                <Footer />
            </BrowserRouter>
		</>
	)
}

export default App

