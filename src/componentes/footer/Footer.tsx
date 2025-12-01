function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around bg-[#EE7602] py-12 mx-auto items-center w-full
        border-t-[#0255EE] border-t-16 gap-10 md:gap-0 px-6">

        {/* ESQUERDA */}
        <div className="flex flex-col gap-2 text-white font-bold max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl mb-4">
            Cuidar de talentos é construir o futuro.
          </h2>

          <h3 className="text-xl md:text-2xl mb-3">
            Entre em contato conosco!
          </h3>

          <p className="text-base md:text-lg">Privacidade</p>
        </div>

        {/* DIREITA */}
        <div className="flex flex-col items-center md:items-start">

          {/* Redes sociais */}
          <div className="text-white flex flex-col justify-center items-center my-6">
            <p className="text-2xl md:text-3xl font-bold mb-3">Redes Sociais</p>
            <span className="flex gap-4">
              <a
                href="https://github.com/TechBloom-GrupoE"
                target="_blank"
              >
                <img
                  src="https://ik.imagekit.io/gwm5ha4ws/Group%207.png"
                  alt="icone github"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </a>

              <a href="">
                <img
                  src="https://ik.imagekit.io/gwm5ha4ws/Group%204.png"
                  alt="icone Linkedin"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </a>
            </span>
          </div>

          {/* Contatos */}
          <div className="text-white my-2 flex flex-col justify-center items-center md:items-start">
            <p className="text-2xl md:text-3xl font-bold mb-3">Contatos</p>

            <span className="flex items-center gap-3">
              <img
                src="https://ik.imagekit.io/gwm5ha4ws/Phone.png"
                alt="telefone"
                className="w-6 h-6"
              />
              <p className="text-lg">(19) 9999-9999</p>
            </span>

            <span className="flex items-center gap-3 mt-2">
              <img
                src="https://ik.imagekit.io/gwm5ha4ws/Letter.png"
                alt="email"
                className="w-6 h-6"
              />
              <p className="text-lg">email@email.com</p>
            </span>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
