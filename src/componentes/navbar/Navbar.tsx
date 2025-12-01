import { SignOutIcon, UserCircleIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow">
      <div className="w-full flex justify-between items-center py-3 px-12">

        {/* LOGO */}
        <div className="flex items-center gap-3 w-1/2 py-6">
          <Link to="/">
            <img
              src="https://ik.imagekit.io/p9rdkccyy/smartrh_logo_horizontal.png.png"
              alt="Logo"
              className="w-70"
            />
          </Link>
        </div>

        {/* MENU */}
        <nav className="md:flex items-center gap-6 text-[15px] font-semibold">

          <Link to='/colaboradores' className='text-2xl px-4 text-orange-500 hover:opacity-50'>
            Colaboradores
          </Link>

          <Link to='/departamentos' className='text-2xl px-4 text-orange-500 hover:opacity-50'>
            Departamentos
          </Link>

          <Link to='/caddepartamento' className='text-2xl px-4 text-orange-500 hover:opacity-50'>
            Cadastrar Departamento
          </Link>

          <Link to='/perfil'>
            <UserCircleIcon size={50} weight='fill' />
          </Link>

          <Link to='/sair'>
            <SignOutIcon size={45} weight='bold' />
          </Link>
        </nav>
      </div>
    </header>
  );
}