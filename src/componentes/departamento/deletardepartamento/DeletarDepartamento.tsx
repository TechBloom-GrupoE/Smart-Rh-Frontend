import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Departamento from "../../../models/Departamento";
import { deletar, listar } from "../../../services/Services";
import { ClipLoader } from "react-spinners";

function Deletardepartamento() {
	 const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [departamento, setdepartamento] = useState<Departamento>({} as Departamento)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/departamentos/${id}`, setdepartamento)
        } catch (error: any) {
            alert('Tema não encontrado!')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletardepartamento() {
        setIsLoading(true)

        try {
            await deletar(`/departamentos/${id}`)

            alert('departamento apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar a departamento')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/departamentos")
    }
	return (
		<div className='w-full max-w-md m-16 pt-4 pb-4 mx-auto sm:pt-6 sm:pb-6'>
            <h1 className='py-4 text-3xl text-center md:text-4xl font-bold uppercase text-orange-400'>Deletar departamento</h1>
            <p className='mb-4 text-base font-semibold text-center md:text-lg'>
                Você tem certeza de que deseja apagar a departamento a seguir?</p>
            <div className='flex flex-col justify-between overflow-hidden border rounded-2xl'>
                <header
                    className='px-4 py-2 text-lg font-semi-bold text-black md:px-6 bg-orange-400  uppercase md:text-2xl'>
                    Departamento
                </header>
                <p className='h-full p-4 text-xl bg-white md:p-8 md:text-3xl'>{departamento.descricao}</p>
                <div className="flex flex-row">
                    <button
                        className='w-full py-2 text-base bg-red-200 text-white hover:bg-red-500 md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='flex items-center justify-center w-full text-base bg-green-200 text-white hover:bg-green-400 md:text-lg'
                        onClick={deletardepartamento}
                    >
                        {isLoading ?
                            <ClipLoader
                            color="#ffffff"
                            size={24}
                          />
                            :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Deletardepartamento
