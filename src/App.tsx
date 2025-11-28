import { BrowserRouter } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Navbar from "./componentes/navbar/Navbar"
import Home from "./pages/home/Home"

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
