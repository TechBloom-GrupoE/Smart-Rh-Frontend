import type Departamento from "./Departamento";

export default interface Colaborador {

    id: number;
    nome: string;
    email: string;
    cargo: string;
    salario: number;
    foto: string;
    horasMensais: number;
    dependentes: number;
    departamento: Departamento | null;

}