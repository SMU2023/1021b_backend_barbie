import {describe, expect, it, test} from 'vitest'

import BancoEmMemoria from './banco-em-memoria'

describe('BancoEmMemoria', () => {
    test('deve salvar um filme em memória', () => {
        //Entrada de dados
        const filme = {
            id:1,
            titulo:'Filme 1',
            descricao:'Descrição do filme 1',
            imagem:'imagem.jpg'
        }
        //Processamento
        const bancoEmMemoria = new BancoEmMemoria()
        bancoEmMemoria.salvar(filme)

        //Saída
        expect(bancoEmMemoria.filmes).toEqual([filme])
        expect(bancoEmMemoria.filmes.length).toBe(1)
    })
    test('deve listar os filmes salvos em memória', () => {
        //Entrada
        const filme = {
            id:1,
            titulo:'Filme 1',
            descricao:'Descrição do filme 1',
            imagem:'imagem.jpg'
        }
        //processamento
        const bancoEmMemoria = new BancoEmMemoria()
        bancoEmMemoria.filmes.push(filme)
        const resultado = bancoEmMemoria.listar()
        //saída
        expect(resultado).toEqual([filme])
    })
    test('deve buscar um filme pelo id', () => {
        
    })
    test('deve apagar os dados salvos em memória', () => {})
})