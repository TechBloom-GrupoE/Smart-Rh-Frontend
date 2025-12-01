import type Colaborador from "./Colaborador";

export default interface Departamento{
    id: number;
    descricao: string;
    colaborador?: Colaborador[];
}