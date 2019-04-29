import { Negociacao } from '../models/Negociacao';
import { MeuObjeto } from './index';


export class Negociacoes implements MeuObjeto<Negociacoes> {

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

    ehIgual(obj: Negociacoes) : boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(obj.paraArray());
    }
}