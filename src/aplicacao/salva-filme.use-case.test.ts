import { test, expect, describe } from 'vitest';
import SalvaFilme from './salva-filme-use-case';
import BancoEmMemoria from '../infra/banco/banco-em-memoria';

describe('Testando salva filme use case', () => {
  test('Deve salvar um filme', () => {
    const bancoEmMemoria = new BancoEmMemoria();
    const salvarFilme = new SalvaFilme();
    const input: Input = {
      titulo: 'test',
      descricao: 'test',
      imagem: 'test',
    };

    const resultado = salvarFilme.execute(input);

    expect(resultado).toEqual(input);
  });
});

type Input = {
  titulo: string;
  descricao: string;
  imagem: string;
};

type Output = {
  titulo: string;
  descricao: string;
  imagem: string;
};
