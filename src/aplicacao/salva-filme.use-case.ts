export default class SalvaFilme {
    private repositorio;
  
    constructor(repositorio: any) {
      this.repositorio = repositorio;
    }
  
    public execute(input: Input): Output {
      const { id, titulo, descricao, imagem } = input;
      this.repositorio.salvar(id, titulo, descricao, imagem);
      return this.repositorio.buscarPorId(id);
    }
  }
  
  type Input = {
    id: number; 
    titulo: string;
    descricao: string;
    imagem: string;
  };
  
  type Output = {
    id: number; 
    titulo: string;
    descricao: string;
    imagem: string;
  };
  