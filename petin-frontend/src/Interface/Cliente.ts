import { Estabelecimento } from "./Estabelecimento";

export interface Cliente {

    id: string;
    nome: string;
    cpf: string;
    isAtivo: boolean;
    Estabelecimento: Estabelecimento[];
}