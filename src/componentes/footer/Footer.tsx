import { GithubLogoIcon } from "@phosphor-icons/react"

function Footer() {
  return (
    <>
    <div className="flex justify-center bg-[#EE7602] py-12 gap-6">
      <div className="flex flex-col gap-2 text-white font-bold">
      <h2 className="text-4xl ">Cuidar de talentos é construir o futuro.</h2>
      <h3 className="text-3xl">Entre em contato conosco!</h3>
      <p>Privacidade</p>
    </div>
    <div className="">
      <div className="text-white text-center">
        <p className="text-3xl font-bold">Redes Sociais</p>  
        <a href="https://github.com/TechBloom-GrupoE" target="_blank">
        <GithubLogoIcon size={48} weight='bold'/>
        </a>
      </div>
      <div className="text-white my-6">
        <p className="text-3xl font-bold">Contatos</p>
        <p>(19) 9999-9999</p>
        <p>email@email.com</p>
      </div>      
    </div>
    </div>
    
    </>
  )
}

export default Footer