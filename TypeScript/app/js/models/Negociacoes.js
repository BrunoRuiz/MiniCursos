class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(Negociacao) {
        this._negociacoes.push(Negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
