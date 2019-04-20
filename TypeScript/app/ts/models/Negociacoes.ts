import { Negociacao } from '../models/Negociacao';
import { Imprimivel } from './Imprimivel';

export class Negociacoes implements Imprimivel{

    private _negociacoes: Negociacao[] = []

    adiciona(Negociacao: Negociacao): void {

        this._negociacoes.push(Negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(){

        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }
}