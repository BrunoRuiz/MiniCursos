class Negociacoes {

    private _negociacoes: Negociacao[] = []

    adiciona(Negociacao: Negociacao): void {

        this._negociacoes.push(Negociacao);
    }

    paraArray(): Negociacao[] {

        return [].concat(this._negociacoes);
    }
}