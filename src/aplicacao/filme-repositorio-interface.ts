export default interface FilmeRepositorioInterface {
    salvar(Input:FilmeDTO): Promise<FilmeDTO>;
    listar():  Promise<FilmeDTO[]>;
    buscarPorId(id: number): Promise<FilmeDTO>;
}
type FilmeDTO = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}