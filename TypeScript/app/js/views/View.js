System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, scape = false) {
                    this._element = document.querySelector(selector);
                    this._scape = scape;
                }
                update(model) {
                    let template = this.template(model);
                    if (this._scape)
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    this._element.innerHTML = template;
                }
            };
            exports_1("View", View);
        }
    };
});
