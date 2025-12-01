import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Navbar from "./componentes/navbar/Navbar"
import Home from "./pages/home/Home"
import ListarColaboradores from "./coaborador/listarcolaboradores/ListarColaboradores"
import DeletarColaborador from "./coaborador/deletarcolaborador/DeletarColaborador"
import FormColaborador from "./coaborador/formcolaborador/FormColaborador"

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div>
				<Routes>
				<Route path="/" element={<Home />}/>
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
