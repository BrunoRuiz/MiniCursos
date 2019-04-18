import { Negociacao } from '../models/Negociacao';

export class Negociacoes {

    private _negociacoes: Negociacao[] = []

    adiciona(Negociacao: Negociacao): void {

        this._negociacoes.push(Negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}