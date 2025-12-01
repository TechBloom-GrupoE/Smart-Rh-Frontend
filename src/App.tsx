import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componentes/navbar/Navbar"
import Home from "./pages/home/Home"

function App() {
	return (
		<BrowserRouter>
			<Navbar menuState={"closed"} onMenuToggle={function (): void {
				throw new Error("Function not implemented.")
			} } onMenuClose={function (): void {
				throw new Error("Function not implemented.")
			} } />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/colaboradores" element={<ListarColaboradores />} />
					<Route path="/cadastrarcolaborador/:id" element={<FormColaborador />} />
					<Route path="/editarcolaborador/:id" element={<FormColaborador />} />
					<Route path="/deletarcolaborador/:id" element={<DeletarColaborador />} /> */}
				</Routes>
			</div>
		</BrowserRouter>

		// <>

		// <Navbar />
		// <Home />


		// </>
	)
}

export default App

