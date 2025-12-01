import { SignOutIcon, UserCircleIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import { Link } from "react-router-dom";



type MenuState = 'closed' | 'open';

interface NavbarProps {
  menuState: MenuState;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};


function Navbar({ menuState, onMenuToggle, onMenuClose }: Readonly<NavbarProps>) {

  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = (): void => {
    onMenuToggle();
  };

  // Handler para fechar o menu mobile, ao clicar no botão X
  const handleMenuClose = (): void => {
    onMenuClose();
  };


  return (
    <>
      <header className="w-full bg-white shadow">
        <div className="w-full flex justify-between items-center py-3 px-12">

          {/* INÍCIO - Div do logo e Título SmartRH */}

          <div className="flex items-center gap-3 w-1/2 py-6">
            <Link to='/home'>
              <img
                src="https://ik.imagekit.io/p9rdkccyy/smartrh_logo_horizontal.png.png"
                alt="Logo"
                className="w-70" // ajusta o tamanho; pode alterar
              />
            </Link>

           {/* Logo escrit embaixo:  className="w-50 md:w-60" */}


          </div>

          {/* FIM - Div do logo e Título SmartRH */}


          {/* INÍCIO - MENU*/}
          <nav className="md:flex items-center gap-6 text-[15px] font-semibold">
            {/* <div className="relative flex items-center justify-center w-2/5 text-black max-md:hidden">
              <SearchForm />
            </div> */}

            {/* Menu de navegação desktop/tablet */}
            {/* <div className='items-center hidden gap-4 py-4 md:flex'> */}
              <Link to='/colaboradores' className='text-2xl px-4 text-orange-500 hover:opacity-50'>Colaboradores</Link>
              <Link to='/departamentos' className='text-2xl px-4 text-orange-500 hover:opacity-50'>Departamentos</Link>
              <Link to='/calcularsalario' className='text-2xl px-4 text-orange-500 hover:opacity-50'>Calcular Salário</Link>
              <Link to='/sobrenos' className='text-2xl px-4 text-black hover:opacity-50'>Sobre nós</Link>

              <Link to='/perfil'><UserCircleIcon size={50} weight='fill'/></Link>
              <Link to='/sair'><SignOutIcon size={45} weight='bold'/></Link>
              
       
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
