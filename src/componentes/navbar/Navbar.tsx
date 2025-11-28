function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
        <div className="container flex justify-between text-lg mx-8">
          Logo
          <div className='flex gap-4'>
            Colaboradores
            Departamentos
            Sobre nós
            Perfil
            Sair
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
