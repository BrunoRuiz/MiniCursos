import { NegociacaoParcial, Negociacao } from '../models/index';
import { HandlerFunction } from '../services/interface/index';

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<void | Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {

                console.log(err);
                throw new Error('Não foi possivel importar as negociações.');
            });

    }
}