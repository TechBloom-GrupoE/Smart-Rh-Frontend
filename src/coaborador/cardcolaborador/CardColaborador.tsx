import {
	PencilIcon,	TrashIcon, CurrencyCircleDollarIcon, EnvelopeIcon, BriefcaseIcon, BuildingsIcon, } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import type Colaborador from '../../models/Colaborador'
import ModalHolerite from '../modalcolaborador/ModalHolerite'
import ModalCalcularSalario from '../modalcolaborador/ModalCalcularSalario'

interface CardColaboradorProps {
  colaborador: Colaborador
  onCalcular: (colaborador: Colaborador) => void
  onHolerite: (colaborador: Colaborador) => void
}

function CardColaborador({ colaborador }: CardColaboradorProps) {
	const [openCalcular, setOpenCalcular] = useState(false)
	const [openHolerite, setOpenHolerite] = useState(false)
	const [holerite, setHolerite] = useState<any | null>(null)

	return (
		<>
			<div className="relative flex flex-col justify-between overflow-hidden bg-white rounded-lg border border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg w-80 mx-auto p-6 space-y-4">

				{/* Ícones de editar/deletar */}
				<div className="absolute top-3 right-3 flex gap-2 z-10">
					<Link to={`/editarcolaborador/${colaborador.id}`}>
						<PencilIcon
							size={22}
							className="text-slate-400 hover:text-amber-600 transition-colors cursor-pointer"
							weight="regular"
						/>
					</Link>

					<Link to={`/deletarcolaborador/${colaborador.id}`}>
						<TrashIcon
							size={22}
							className="text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
							weight="regular"
						/>
					</Link>
				</div>


				{/* Foto de perfil em módulo redondo */}
				<div className="flex justify-start -mt-4">
					<div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-slate-100">
						<img
							src={colaborador.foto}
							alt="Foto do colaborador"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Informações com ícones */}
				<div className="space-y-3 text-left text-slate-700 text-sm">
					<h3 className="text-xl font-semibold  text-slate-800">{colaborador.nome}</h3>

					<div className="flex items-center gap-2">
						<BuildingsIcon size={20} className="text-amber-500" />
						<span>{colaborador.departamento?.descricao ?? 'Não informado'}</span>
					</div>
					<div className="flex items-center gap-2">
						<BriefcaseIcon size={20} className="text-amber-500" />
						<span>{colaborador.cargo}</span>
					</div>
					<div className="flex items-center gap-2">
						<EnvelopeIcon size={20} className="text-amber-500" />
						<span>{colaborador.email}</span>
					</div>
					<div className="flex items-center gap-2">
						<CurrencyCircleDollarIcon size={20} className="text-amber-500" />
						<span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(colaborador.salario)}
						</span>
					</div>
				</div>

				{/* Botões */}
				<div className="flex gap-2 pt-2">
					<button
						className="flex-1 py-2 bg-amber-500 text-white rounded hover:bg-amber-400 transition-colors text-sm"
						onClick={() => setOpenCalcular(true)}
					>
						Calcular Salário
					</button>

					<button
						className="flex-1 py-2 bg-neutral-500 text-white rounded hover:bg-neutral-400 transition-colors text-sm"
						onClick={() => setOpenHolerite(true)}
						disabled={!holerite}
					>
						Holerite
					</button>
				</div>
			</div>

			{/* Modal de Calcular Salário */}
			{openCalcular && (
				<ModalCalcularSalario
					colaboradorId={colaborador.id}
					onClose={() => setOpenCalcular(false)}
					onSuccess={(hol) => {
						setHolerite(hol)
						setOpenCalcular(false)
						setOpenHolerite(true)
					}}
				/>
			)}

			{/* Modal de Holerite */}
			{openHolerite && holerite && (
				<ModalHolerite
					holerite={holerite}
					colaborador={colaborador}
					onClose={() => setOpenHolerite(false)}
				/>
			)}
		</>
	)
}

export default CardColaborador
