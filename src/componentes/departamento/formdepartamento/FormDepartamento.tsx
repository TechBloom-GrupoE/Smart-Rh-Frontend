import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, cadastrar, listar } from "../../../services/Services";
import type Departamento from "../../../models/Departamento";
import { ClipLoader } from "react-spinners";

function Formdepartamento() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [departamento, setdepartamento] = useState<Departamento>({} as Departamento);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/departamentos/${id}`, setdepartamento)
    } catch (error: any) {
      alert('Departamento não encontrado!')
      console.error(error)
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setdepartamento({
      ...departamento,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovodepartamento(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/departamentos`, departamento, setdepartamento)

        alert('Departamento atualizado com sucesso!')

      } catch (error: any) {
        alert('Erro ao atualizar o departamento')
        console.error(error)
      }

    } else {
      try {
        await cadastrar(`/departamentos`, departamento, setdepartamento)

        alert('Departamento cadastrado com sucesso!')

      } catch (error: any) {
        alert('Erro ao cadastrar o departamento')
        console.error(error)
      }
    }

    setIsLoading(false)
    retornar();

  }

function retornar() {
    navigate("/departamentos")
  }

   return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-20 mx-auto bg-gray-200">
      <h1 className="my-8 text-lg text-center md:text-4xl font-bold  uppercase py-6 text-orange-400 gap-4">
        {id === undefined ? 'Cadastrar Departamento' : 'Editar Departamento'}
      </h1>

      <form className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2"
        onSubmit={gerarNovodepartamento}
      >
        <div className="flex flex-col gap-2 text-orange-400 text-2xl ">
          <label htmlFor="descricao">Departamento</label>
          <input
            type="text"
            placeholder="Departamento"
            id='descricao'
            name='descricao'
            className="p-2 text-base bg-white rounded md:text-lg "
            required
            value={departamento.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 font-bold bg-orange-400 hover:bg-orange-200 md:w-1/2 md:text-lg"
          type="submit"
        >
          {isLoading ?
            <ClipLoader
            color="#ffffff"
            size={24}
          />
            :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default Formdepartamento;