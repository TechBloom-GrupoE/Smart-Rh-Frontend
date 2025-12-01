import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Navbar from "./componentes/navbar/Navbar"
import Home from "./pages/home/Home"
import ListarDepartamento from "./componentes/departamento/listardepartamento/ListarDepartamento"
import FormDepartamento from "./componentes/departamento/formdepartamento/FormDepartamento"
import DeletarDepartamento from "./componentes/departamento/deletardepartamento/DeletarDepartamento"


function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Home />
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App

