import { useEffect, useState } from 'react'
import type Colaborador from '../../models/Colaborador';
import { ClipLoader } from 'react-spinners';
import CardColaborador from '../cardcolaborador/CardColaborador';
import { listar } from '../../services/Services';
import { ToastAlerta } from '../../utils/ToastAlerta';


function ListarColaboradores() {

	const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function buscarColaboradores() {

		setIsLoading(true);

		try {

			await listar('/colaboradores', setColaboradores)

		} catch {
			ToastAlerta('Erro ao listar todos os colaboradores!', 'error')
		} finally {
			setIsLoading(false);
		}

	}

	useEffect(() => {
		buscarColaboradores();
	}, [colaboradores.length])

	return (
		<>

			{
				isLoading && (
					<div className="flex justify-center w-full my-8">
						<ClipLoader
						color="#0D9488"
						size={80}
						speedMultiplier={2}
						aria-label="loading"							
						/>
					</div>
				)
			}
			<div className="flex justify-center w-full bg-slate-200 min-h-[70vh] overflow-x-hidden">
				<div className="box-border w-full px-4 py-4 mt-8 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">

					{
						(!isLoading && colaboradores.length === 0) && (
							<span className="text-3xl text-center my-8">
								Nenhum Colaborador foi encontrado!
							</span>
						)
					}

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
						
						{
							colaboradores.map((colaborador) => (
								<CardColaborador key={colaborador.id} colaborador={colaborador} onCalcular={function (): void {
									throw new Error('Function not implemented.');
								} } onHolerite={function (): void {
									throw new Error('Function not implemented.');
								} }/>
							))
						}
						

					</div>
				</div>
			</div>
		</>
	)
}

export default ListarColaboradores
