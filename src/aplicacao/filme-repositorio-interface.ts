export default interface FilmeRepositorioInterface {
    salvar(): Promise<any>;
    listar():  Promise<any>;
    buscarPorId(id: number): Promise<any>;
}