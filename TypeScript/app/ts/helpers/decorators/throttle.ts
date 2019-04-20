export function throttle(milesegundos = 500){

    return function(target: any, propertykey: string, descriptor: PropertyDescriptor){
        
        const metodoOriginal = descriptor.value;
        let timer = 0;

        descriptor.value = function(...args: any[]){

            if (event)
                event.preventDefault();
        
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milesegundos);            
        }

        return descriptor;
    }
}