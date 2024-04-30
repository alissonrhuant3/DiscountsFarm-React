export interface IJogos {
    id: number,
    titulo: string,
    subTitulo: string,
    promocao: string,
    preco: number,
    precoAnterior: number,
    porcentagemDesconto: number,
    categoria: number | string,
    data: string,
    urlJogo: string,
    urlImagem: string,
    usuario?: string
}