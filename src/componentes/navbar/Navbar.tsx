import { List, SignOutIcon, UserCircleIcon, X } from "@phosphor-icons/react";
import { useRef } from "react";
import { Link } from "react-router-dom";


type MenuState = "closed" | "open";

interface NavbarProps {
  menuState: MenuState;
  onMenuToggle: () => void;
  onMenuClose: () => void;
}

function Navbar({
  menuState,
  onMenuToggle,
  onMenuClose,
}: Readonly<NavbarProps>) {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
        <div className="w-full flex justify-between items-center py-2 px-6 md:px-12">

          {/* LOGO */}
          <div className="flex items-center py-6">
            <Link to="/">
              <img
                src="https://ik.imagekit.io/p9rdkccyy/smartrh_logo_horizontal.png.png"
                alt="Logo"
                className="w-40"
              />
            </Link>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            {menuState === "open" ? <X size={32} /> : <List size={32} />}
          </button>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 font-semibold">
            <Link to="/colaboradores" className="text-xl px-2 text-orange-500 hover:opacity-50">
              Colaboradores
            </Link>

            <Link to="/departamentos" className="text-xl px-2 text-orange-500 hover:opacity-50">
              Departamentos
            </Link>

            <Link to="/carddepartamento" className="text-xl px-2 text-orange-500 hover:opacity-50">
              Cadastrar Departamento
            </Link>

            <Link to="/perfil">
              <UserCircleIcon size={40} weight="fill" />
            </Link>

            <Link to="/sair">
              <SignOutIcon size={25} weight="bold" />
            </Link>
          </nav>
        </div>

        {/* MENU MOBILE */}
        {menuState === "open" && (
          <div
            ref={menuRef}
            className="md:hidden bg-white w-full shadow-inner flex flex-col items-start px-6 pb-4 gap-3 text-lg font-semibold"
          >
            <button
              onClick={onMenuClose}
              className="self-end mt-2 mb-4"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <Link to="/colaboradores" className="text-orange-500 hover:opacity-50">
              Colaboradores
            </Link>

            <Link to="/departamentos" className="text-orange-500 hover:opacity-50">
              Departamentos
            </Link>

            <Link to="/carddepartamento" className="text-orange-500 hover:opacity-50">
              Cadastrar Departamento
            </Link>

            <div className="flex items-center gap-4 mt-4">
              <Link to="/perfil">
                <UserCircleIcon size={35} weight="fill" />
              </Link>

              <Link to="/sair">
                <SignOutIcon size={25} weight="bold" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* evita sobrepor conteúdo */}
      <div className="pt-24"></div>
    </>
  );
}

export default Navbar