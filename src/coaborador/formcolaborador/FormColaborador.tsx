import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Colaborador from "../../models/Colaborador";
import { atualizar, cadastrar, listar } from "../../services/Services";
import type Departamento from "../../models/Departamento";
import { ClipLoader } from "react-spinners";



function FormColaborador() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);

  const [departamento, setDepartamento] = useState<Departamento>({
    id: 0,
    descricao: "",
  })

  const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador);


  const { id } = useParams<{ id: string }>();

  async function buscarColaboradorPorId(id: string) {

    try {

      await listar(`/colaboradores/${id}`, setColaborador)

    } catch {
      alert('Erro ao listar colaborador!')
      
    }

  }

  async function buscarDepartamentoPorId(id: string) {

    try {

      await listar(`/departamentos/${id}`, setDepartamento)

    } catch {
      alert('Erro ao listar departamento!')
   
    }

  }
  async function buscarDepartamentos() {

    try {

      await listar(`/departamentos`, setDepartamentos)

    } catch {
      alert('Erro ao listar todos os departamentos!')

    }

  }

  useEffect(() => {
    buscarDepartamentos()

    if (id !== undefined) {
      buscarColaboradorPorId(id)
    }
  }, [id])

  useEffect(() => {
    setColaborador({
      ...colaborador,
      departamento: departamento,
    })
  }, [departamento])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

    const { type, value, name } = e.target
    let valor: string | number = value;

    if (['number'].includes(type) || (!isNaN(Number(value)) && value !== "")) {
      const valorSemZeros = value.replace(/^0+(?!$)/, "") || "0"
      valor = parseFloat(Number(valorSemZeros).toFixed(2))
    }

    setColaborador({
      ...colaborador,
      [name]: valor,
      departamento: departamento,
    })
  }

  function retornar() {
    navigate('/colaboradores');
  }

  async function gerarNovoColaborador(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {

      try {
        await atualizar(`/colaboradores`, colaborador, setColaborador);
        alert("Colaborador foi atualizado com sucesso!")
      } catch {
        alert("Erro ao atualizar colaborador")
      }

    } else {
      try {
        await cadastrar(`/colaboradores`, colaborador, setColaborador);
       alert("Colaborador foi cadastrado com sucesso!")
      } catch {
        alert("Erro ao cadastrar colaborador")
      }
    }
    setIsLoading(false);
    retornar();

  }


  return (
    <div
      className="container flex flex-col items-center justify-start mx-auto bg-slate-100 min-h-[70vh]
        px-4 py-12"
    >
      <h1 className="mb-8 text-3xl font-semibold text-center md:text-4xl text-amber-500">
        {id === undefined ? 'Cadastrar' : 'Editar'} Colaborador
      </h1>

      <form
        className="flex flex-col w-full max-w-xl gap-4 p-4 bg-white border shadow-sm rounded-xl border-slate-200"
        onSubmit={gerarNovoColaborador}
      >

        <div className="flex gap-4 ">
          {/* Nome */}
          <div className="flex flex-col gap-2 w-3/4">
            <label htmlFor="nome" className="font-medium text-slate-800">
              Nome
            </label>
            <input
              type="text"
              placeholder="Nome do colaborador"
              name="nome"
              id="nome"
              required
              className="p-2 text-base bg-white border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={colaborador.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Dependentes */}
          <div className="flex flex-col gap-2 w-1/4">
            <label htmlFor="dependentes" className="font-medium text-slate-800">
              Dependentes
            </label>
            <input
              type="number"
              placeholder="Dependentes"
              name="dependentes"
              id="dependentes"
              required
              className="text-center p-2 text-base bg-white border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={colaborador.dependentes}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

        </div>

        <div className="flex gap-4">

          {/* Cargo */}
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="cargo" className="font-medium text-slate-800">
              Cargo
            </label>
            <input
              type="text"
              placeholder="Cargo"
              name="cargo"
              id="cargo"
              className="p-2 text-base bg-white border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={colaborador.cargo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Salário */}
          <div className="flex flex-col gap-2 w-30">
            <label htmlFor="salario" className="font-medium text-slate-800">
              Salário
            </label>
            <input
              type="number"
              step=".01"
              placeholder="Salário"
              name="salario"
              id="salario"
              required
              className="text-center p-2 text-base bg-white border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={colaborador.salario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Horas Mensais*/}
          <div className="flex flex-col gap-2 w-30">
            <label htmlFor="horasMensais" className="text-center font-medium text-slate-800">
              Horas Mensais
            </label>
            <input
              type="number"
              placeholder="Horas"
              name="horasMensais"
              id="horasMensais"
              className="text-center p-2 text-base bg-white border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={colaborador.horasMensais}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
        </div>

        {/* E-mail */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="email" className="font-medium text-slate-800">
            E-mail
          </label>
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            id="email"
            className="p-2 text-base bg-white border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={colaborador.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* Foto */}
        <div className="flex flex-col gap-2">
          <label htmlFor="foto" className="font-medium text-slate-800">
            Foto
          </label>
          <input
            type="text"
            placeholder="Link da foto do colaborador"
            name="foto"
            id="foto"
            required
            className="p-2 text-base bg-white border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={colaborador.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* Departamento */}
        <div className="flex flex-col gap-2">
          <label htmlFor="departamento" className="font-medium text-slate-800">
            Departamento
          </label>

          <select
            name="departamento"
            id="departamento"
            className="p-2 text-base bg-white border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={departamento.id !== 0 ? departamento.id : ""}
            onChange={(e) => buscarDepartamentoPorId(e.currentTarget.value)}
          >
            <option value="" disabled>
              Selecione um Departamento
            </option>
            {departamentos.map((departamento) => (
              <option key={departamento.id} value={departamento.id}>
                {departamento.descricao}
              </option>
            ))}

          </select>
        </div>

        {/* Botão */}
        <div className="flex gap-2 pt-2">
          <button
            className="flex-1 py-2 bg-neutral-500 text-white rounded hover:bg-neutral-400 transition-colors text-sm"
            onClick={retornar}
          >
            Voltar
          </button>

          <button
            className="flex-1 py-2 bg-amber-500 text-white rounded hover:bg-amber-400 transition-colors text-sm"
            type="submit"
          >
            {isLoading ? (
              <ClipLoader color="ffffff" size={24} />
            ) : (
              <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
            )}
          </button>


        </div>


      </form>
    </div>
  )
}

export default FormColaborador
