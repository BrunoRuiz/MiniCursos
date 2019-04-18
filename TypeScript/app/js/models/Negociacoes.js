System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adiciona(Negociacao) {
                    this._negociacoes.push(Negociacao);
                }
                paraArray() {
                    return [].concat(this._negociacoes);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
