import { Link } from 'react-router-dom'
import type Departamento from '../../../models/Departamento'


interface CardDepartamentoProps {
    departamento: Departamento
}

function CardDepartamento({ departamento }: CardDepartamentoProps) {
    return (
        
          
          <div className=' flex flex-col rounded-3xl overflow-hidden justify-between'>
            
                <div className="flex bg-orange-200 py-2 px-9 items-center gap-4">
                    <img
                        className='h-12 rounded-full'
                     />
                    <h3 className='text-lg font-bold uppercase text-center '>
                        Departamento
                    </h3>
                </div>
                <div className='p-10 bg-orange-300 text-center '>
                    <h4 className='text-lg font-semibold'>{departamento.descricao}</h4>
                </div>

            <div className="flex">
                <Link to={`/editardepartamento/${departamento.id}`} 
                    className='w-full text-black bg-orange-300 
                    hover:bg-orange-200 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletardepartamento/${departamento.id}`} 
                    className='text-black bg-orange-300 
                    hover:bg-orange-200 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
          </div>

    )
}

export default CardDepartamento