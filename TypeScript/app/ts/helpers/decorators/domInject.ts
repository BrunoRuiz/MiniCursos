export function domInject(selector: string){
    
    return function (target: any, key: string){

        let element: Element;

        const getter = function(){

            if(!element){

                console.log(`Buscando ${selector} para injetar em ${key}`);
                element = <HTMLInputElement>document.querySelector(selector);                
            }

            return element;
        }

        Object.defineProperty(target, key, {get: getter});
    }
}