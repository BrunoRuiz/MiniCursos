System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertykey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'milesegundos';
                let divisor = 1;
                if (emSegundos) {
                    unidade = 'segundos';
                    divisor = 1000;
                }
                console.log('---------------------------------------------------');
                console.log(`Parametros passados para o método ${propertykey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`O retorno do método ${propertykey} é ${JSON.stringify(retorno)}`);
                console.log(`O método ${propertykey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                console.log('---------------------------------------------------');
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
