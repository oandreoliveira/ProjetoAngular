export interface Estabelecimento {

    id: string;
    nome: string;
    cnpj: string;
    descricao: string;
    endereco: string;
    telefone: string;
    email: string;
    imagem: string;
    isAtivo?: boolean;
    id_categoria: string;
    id_cliente: string;
}