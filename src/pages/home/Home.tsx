function Home() {
    return (
        <>
            <div className="bg-slate-200 flex justify-center min-h-[70vh]">
                <div className="container grid grid-cols-2 text-slate-800">

                    <div className="flex flex-col gap-4 items-center justify-center py-10">
                        <h2 className="text-5xl font-semibold">
                            Simplifique processos, potencialize talentos com a SmartRH
                        </h2>

                     
                        {/* Lembrar de trocar o botão para : <ModalProduto />*/}

                        <div className="flex justify-around gap-4">
                            <button
                                className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                                onClick={() => console.log("Botão clicado!")}
                            >
                                Saiba mais
                            </button>
                        </div>

                         <div className="flex justify-around gap-4">
                            <button
                                className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                                onClick={() => console.log("Botão clicado!")}
                            >
                                Cadastrar Colaborador
                            </button>
                        </div>



                    </div>

                    <div>

                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/techbloom/Smart_RH/Imagem%20Normal.png"
                            alt="Imagem Página Home"
                            className="w-2/3 m-12"
                        />
                    </div>

                </div>
            </div>

            {/* <ListarProdutos /> */}
        </>
    )
}

export default Home