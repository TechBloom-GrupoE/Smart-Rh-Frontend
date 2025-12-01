import Popup from "reactjs-popup";
import FormColaborador from "../formcolaborador/FormColaborador";

function ModalColaborador(){
    return(
        <>
            <Popup
                trigger={
                    <button className="text-amber-500 border rounded px-4 py-2 hover:bg-white hover:text-amber-400">
                        Cadastrar Colaborador
                    </button>
                }
                modal
                contentStyle={{
                    width: "40%",  
                    maxWidth: "90%",  
                    height: "80%",       
                    borderRadius: '1rem',
                    paddingBottom: '2rem',
                    backgroundColor: 'white'
                }}
            >
                <FormColaborador />
            </Popup>
        </>
    );
}
export default ModalColaborador;