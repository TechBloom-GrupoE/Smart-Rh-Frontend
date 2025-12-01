function Home() {
    return (
        <>
            <div className="bg-slate-200 flex justify-center min-h-[70vh] scroll-smooth">

                {/* Primeira parte da Home */}
                <div className="grid grid-cols sm:grid-cols-2 w-full">
                    <div className="p-4 bg-[#F08E30]">
                        <div className="w-full max-w-5xl mx-auto py-20 pl-20 flex flex-col justify-center ">
                            <h2 className="flex text-5xl font-semibold">
                                Simplifique processos, potencialize talentos com a SmartRH
                            </h2>


                            {/* Lembrar de trocar o botão para : <ModalProduto />*/}

                            <div className="mt-10 flex gap-4">
                                <button
                                    className="px-4 py-2 rounded-3xl lg:rounded-full bg-white/25 hover:bg-white/85 border border-white transition"
                                    onClick={() => console.log("Botão clicado!")}
                                >
                                    Saiba mais
                                </button>
                                <button
                                    className="px-4 py-2 rounded-3xl lg:rounded-full bg-white/25 hover:bg-white/85 border border-white transition"
                                    onClick={() => console.log("Botão clicado!")}
                                >
                                    Cadastrar Colaborador
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center bg-[#F08E30]">
                        <img
                            src="https://ik.imagekit.io/techbloom/Smart_RH/Imagem%20Normal.png"
                            alt="Imagem Página Home"
                            className="w-2/3 m-12"
                        />
                    </div>
                </div>

            </div>

            {/* Segunda parte da Home - Quem somos */}
            <div className="flex flex-col justify-center items-center w-full px-6 py-20 sm:px-10 bg-white">
                <img src="https://ik.imagekit.io/dijdduf7u/Projeto%20Integrador/project-management.png" alt="Logo" className="w-18 sm:w-20" />
                <p className="text-3xl sm:text-4xl py-6 font-bold text-orange-500">
                    Quem somos
                </p>
                <p className="text-center font-light max-w-2xl text-gray-900 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                    {`Na TechBloom, acreditamos que a tecnologia deve simplificar o que é complexo. Por isso criamos o SmartRH, uma plataforma inteligente que centraliza, automatiza e transforma a gestão de Recursos Humanos. Nossa missão é empoderar empresas com soluções modernas, intuitivas e eficientes, que colocam as pessoas no centro das decisões.
                    
                    Com design responsivo, funcionalidades automatizadas e uma experiência visual organizada, o SmartRH foi desenvolvido para atender às necessidades reais de equipes de RH, desde o controle de departamentos até o cálculo automático de salários. Somos inovação com propósito: facilitar o dia a dia, valorizar talentos e impulsionar resultados.`}
                </p>
            </div>

            <div className="bg-linear-to-r from-bg-blue-400 via-green-400 to-blue-500 h-2 w-full">
            </div>

            {/* Terceira parte da Home - Motivos */}
            <div className="bg-gray-200 py-25 px-4 sm:px-6 lg:px-8 mb-15">
                <div className="mx-auto flex text-center justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 pb-25">
                        Por que escolher a <span className="text-orange-500">SmartRH</span>?
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-900 justify-items-center">

                    <div className="bg-[#FF7D00]/75 hover:bg-[#F57800] min-h-80 max-w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">

                        {/* Substituir por algum ícone aqui */}
                        <img src="https://ik.imagekit.io/dijdduf7u/Projeto%20Integrador/project-management.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />

                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                            Agilidade
                        </h3>
                        <p className="text-base sm:text-lg font-regular">
                            Reduza tempo de processos e otimize o fluxo do RH.
                        </p>
                    </div>

                    <div className="bg-[#FF7D00]/75 hover:bg-[#F57800] min-h-80 max-w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        {/* Icone aqui */}
                        <img src="https://ik.imagekit.io/dijdduf7u/Projeto%20Integrador/project-management.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                            Automatização inteligente
                        </h3>
                        <p className="text-base sm:text-lg font-regular">
                            Menos erros humanos, mais precisão.
                        </p>
                    </div>

                    <div className="bg-[#FF7D00]/75 hover:bg-[#F57800] min-h-80 max-w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        {/* Icone aqui */}
                        <img src="https://ik.imagekit.io/dijdduf7u/Projeto%20Integrador/project-management.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                            Experiência do usuário
                        </h3>
                        <p className="text-base sm:text-lg font-regular">
                            Interface simples, bonita e fácil de navegar.
                        </p>
                    </div>
                </div>
            </div>

            {/* <ListarProdutos /> */}
        </>
    )
}

export default Home