import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {

    protected _element: Element;
    private _scape: boolean;

    constructor(selector: string, scape: boolean = false){

        this._element = (document.querySelector(selector) as Element);
        this._scape = scape;
    }  
    
    update(model: T){

        let template = this.template(model);

        if(this._scape)
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        
        this._element.innerHTML = template;        
    }

    abstract template(model: T): string;
}