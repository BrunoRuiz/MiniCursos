System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(selector) {
        return function (target, key) {
            let element;
            const getter = function () {
                if (!element) {
                    console.log(`Buscando ${selector} para injetar em ${key}`);
                    element = document.querySelector(selector);
                }
                return element;
            };
            Object.defineProperty(target, key, { get: getter });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
