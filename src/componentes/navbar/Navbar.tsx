
function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
        <div className="container flex justify-between text-lg mx-8">

             {/* Substituir "Logo" pela imagem */}
          <img 
            src="https://ik.imagekit.io/p9rdkccyy/smartrh_logo.png.png" 
            alt="Logo" 
            className="h-35" // ajusta o tamanho; pode alterar
          />



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
